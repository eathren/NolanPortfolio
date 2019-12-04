---
title: Raygun and Gatsby
date: "2019-09-18"
description: "Getting Raygun to work with Gatsby.js  "
---

Gatsby is great. It's a way to build fast static websites that still rehydrate to react in the browser. This means that you can build hybrid, fast webapps with a small-learning curve. However, the extra layer of abstraction can sometimes make even the simplest of additions troublesome if they go contrary to gatsby's opinionated build system. Here is the most recent challenge I came across, adding Raygun, an error and user tracking system, to Gatsby.

## Problem 1: Where to put it all.

This one took some figuring. The Raygun JavaScript docs insist on two (or three, if you are manually throwing an exception) scripts to be added to the site/app. The first goes into the head, and the rest into the body. However, The body scripts **need** the head script to load first, and it's a pretty solid one, requiring a call to the Raygun CDN.

There are a few ways I found to do this. The first is to [build an editable version of the html.js file](https://www.gatsbyjs.org/docs/custom-html/) to manually add the scripts. The format of the file should look familiar to you, as it closely mirrors that of a standard html5 page. Adding the scripts here work just fine on local, but in prod-builds gatsby will raise a "window is not defined" error and fail, since during build, Window does not exist. That's no good. You can get around this by using React-Helmet for the head script, but that leaves your body scripts out in the dust, and getting them to build in the proper order is tricky (Hint: "defer").

Gatsby-SSR will fail for a similiar reason, no window is defined during build time. Otherwise Gatsby-SSR would be an excellent option to add in scripts without worrying if Gatsby changed the layout of th html.js file in the future. 

In the end, Gatsby-browser is the best way I found to insitute it personally, but sometimes the gatsby-api's can work not quite as expected, and more can go into a complex-build.

## The solution

The simplest (in my opinion) way I found is to build a content wrapper, making a utils folder, and then a wrapper.js that wraps all the child content. This allows you to mount the scripts in a some-what ugly yet usable manner so that they only build client-side via componentDidMount(), navigating around the window-is-not-defined error at build time.

```js
// src/utils/wrapper.js
import React, { Component } from "react"
import { withPrefix, Link } from "gatsby"

export class Wrapper extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const script1 = document.createElement("script")
    script1.type = "text/javascript"
    script1.async = true
    const scriptText1 = document.createTextNode(`
        !(function (a, b, c, d, e, f, g, h) {
          ; (a.RaygunObject = e),
              (a[e] =
                  a[e] ||
                  function () {
                      ; (a[e].o = a[e].o || []).push(arguments)
                  }),
              (f = b.createElement(c)),
              (g = b.getElementsByTagName(c)[0]),
              (f.async = 1),
              (f.src = d),
              g.parentNode.insertBefore(f, g),
              (h = a.onerror),
              (a.onerror = function (b, c, d, f, g) {
                  h && h(b, c, d, f, g),
                      g || (g = new Error(b)),
                      (a[e].q = a[e].q || []),
                      a[e].q.push({
                          e: g,
                      })
              })
      })(
          window,
          document,
          "script",
          "//cdn.raygun.io/raygun4js/raygun.min.js",
          "rg4js"
      )
    `)

    script1.appendChild(scriptText1)
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.type = "text/javascript"
    script2.defer = true
    const scriptText2 = document.createTextNode(`
    rg4js("apiKey", "${process.env.RAYGUN_API_KEY}")
    rg4js("enableCrashReporting", true)
    rg4js('enablePulse', true);
    `)

    script2.appendChild(scriptText2)
    document.body.appendChild(script2)

    const script3 = document.createElement("script")
    script3.type = "text/javascript"
    script3.defer = true
    const scriptText3 = document.createTextNode(`
    try {
      throw new Error("50 50 vision ");
    } catch (e) {
        rg4js('send',{
          error: (e)
        })
    }
    `)

    script3.appendChild(scriptText3)
    document.body.appendChild(script3)
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export default Wrapper
```
The third script is simply to start the ball rolling by sending an error to your raygun admin page, once the first error goes through, be sure to remove it.

The wrapper is then used with all the content inside of gatsby-browser *(read: absolutely every other part of your rendered app)* with the help of the wrapRootElement api.

```js
// gatsby-browser.js
import Wrapper from "./src/utils/wrapper"

export const wrapRootElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>
}
```

If you chose, like I did, to not include your API key inside of the wrapper, you will need to install dotenv with wither

```js
npm install dotenv --save
```
or 
```js
yarn add dotenv
```

include your env(s) file to root (I prefer to use .env.development and .env.production), and then include it in your gatsby-config file

```js
// gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
```
Be sure to include your .env file(s) to your .gitignore as well, and if you are using netlify, adding the env to your netlify environment variables menu.

And there it is! A functional Raygun interface with immediate error reporting. If you would like to use some more detailed user-tracking, the scripts can be moved around, some to html.js, and into the head, etc, but for any basic build that needs to be up and running immediately, this is the fastest solution that I found.
