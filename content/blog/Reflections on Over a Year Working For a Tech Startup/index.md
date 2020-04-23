---
title: Reflections On Over a Year Working For a Tech Startup
date: "2020-04-22"
description: "Looking back on a 14+ months of hectic, but often rewarding, work."
---

#### Last February began my adventure working for SelfStudy, the newly fledged tech branch of Open Anesthesia.

At the time, I had a middling talent at quickly making sites in Gatsby.js, a static site builder built on top of React, and SelfStudy was interested in seeing how far they could stretch (read: shatter), the conventions of what static actually meant. I had done a week's worth of work for them working on their marketing site, when I mentioned offhand that if they needed some help with a project they mentioned, that I would be happy to help.

Hoooo boy.

Little did I know at the time that the small, genuinely static websites that I had been building at the time wouldn't hold a candle to what working as a software engineer at an actual startup would entail. I had a background in STEM with a couple lovely degrees hanging on the wall and everything, but I had started learning programming **four months** before getting the job, and what I thought would be an easy transition turned out to be an introduction to the frantic, ever-turning _agile_ world of software development.

I joined the morning standup 9 AM the next monday, introduced myself, and it was immediately obvious that I was the youngest developer by at least 20 years. I remember quickly being met with technical questions for how I would approach the project, and wish I could forget the terrible answers I gave (I ended up saying simply that I hadn't really planned out the spec yet, since I had just started. It turned out to be acceptable, if not the totally right thing to say).

And from there, I started working. I pumped out my first rough demo of the system by friday in a frantic marathon of code, and to be honest, it looked pretty rough. The system was originally going to be built using gatsby's internal graphql and a single yaml file for every user, and that plan lasted until about... friday. Welcome to agile. But it had five pages, a mobile-first UI, and it was somethign to be proud of.

And the project lasted about three weeks, and it was going well right until we reached implemented Auth0 and I broke my ankles for the first time (metaphorically speaking). Lambda Functions? AWS? This goes here, and that goes there, and what goes here, and environment variables? I was lost completely, and Andy, a senior dev on the team, took over the project from there on out. I have a hard time remembering if I was swapped projects because I got stuck, or if the newer project took priority, as it was a while ago.

#### And so I was moved to bringing their old database of keyword terms to a purely static site from a WordPress site/database.

I was given a single file of dirty data of over 6000 pages of WordPress entries with multiple fields, pointed in the direction of Yaml, and told "Get to it". And I was still new, and scripts were beyond me. So I started modifying the files one. by. one. Not many days in software stand out to me, but the two that I spent full 8 hour days doing this will haunt me for the rest of my career. About day three though, I threw my hands up, and posted on StackOverflow and the various JS subreddits, which is when I was introduced to Node. Namely, node scripts to take data and and quickly convert it to another format. I just went back through, and actually found the StackOverflow question that I ended up answering myself. Here was my oh-so brilliant solution (I even left the commented out code in there just to show where I was at the time).

```js
const fs = require("fs")
const YAML = require("yamljs")
// const json2md = require("./json2md.js");
const bigObject = require("./data1.json")

// var showdown = require("showdown"),
//   converter = new showdown.Converter(),
//   text = "# hello, markdown!",
//   html = converter.makeHtml(text);

Object.entries(bigObject).forEach(([name, data]) => {
  fs.writeFile(`${name}.yaml`, "---\r\n", err => {
    fs.appendFile(`${name}.yaml`, YAML.stringify(data), err => {
      fs.appendFile(`${name}.yaml`, "---\r\n", err => {
        if (err) throw err
        console.log(`${name}.yaml has been saved!`)
      })
    })
  })
})
```

I clicked run, and my 6000 entries became 6000 files of markdown, in maybe 1.5 seconds. My two days of hand entry code outclassed in a heartbeat by the script, and it was this precise second that I felt like a programmer for the first time. The skies parted, and the heavenly angels of code euphoria sang about me... or something like that. Whatever it was, it was a fantastic, wonderful feeling.

And to be sure, the imposter syndrome is still there today to some degree, but this was the first real moment where I felt like there was a light at the end of the tunnel. I had passed the deepest point of the valley of hell that so many new developers hit after they pass from tutorial after tutorial to actually having to figure out how to make _stuff_.

After that, I think that project went fairly quickly. About three weeks to a month to build, polish, slap Algolia on, and that was that.
