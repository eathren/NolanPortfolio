---
title: Reflections On Over a Year Working For a Tech Startup
date: "2020-04-22"
description: "Looking back on a 16+ months of hectic, but often rewarding, work."
---

_Full disclosure. I don't paint myself in the best light in this post. While I'm told that I do good work, my memories of first entering the field are of hectic days, frantic nights, and absorbing all the information I could grab my fingers on like a sponge-meets-blackhole._

#### Last February I began my adventure working for SelfStudy, the newly fledged tech branch of Open Anesthesia.

At the time, I had some talent as the guy who could quickly make sites in Gatsby.js, a static site builder built on top of React. SelfStudy was interested in seeing how far they could stretch (read: shatter) the conventions of what static actually meant. I had done a week's worth of work for them on their marketing site when I mentioned offhand that if they needed some help with a bigger project, that I would be happy to help. It sounded fairly up my alley, and the spec consisted of a static gatsby site that would be fed a different yaml file of data each day to rebuild the site for each of their clients.

Hoooo boy.

Little did I know that the small, genuinely static websites that I had been building at the time wouldn't hold a candle to what working as a software engineer at an actual startup would entail. I had a background in STEM with a couple lovely degrees hanging on the wall and everything, but I began learning programming only **four months** before getting the job. What I thought would be an easy transition turned out to be an introduction to the frantic, ever-turning _agile_ world of software development.

So, unaware of what I was about to step into, I joined the morning standup meeting at 9 AM the next monday and introduced myself. It was immediately obvious that I was the youngest developer by at least 20 years. I was quickly met with technical questions for how I would approach the project, how I would handle authentication, and more. I wish that I could forget some of the terrible answers I gave (I ended up saying simply that I hadn't really planned out the spec yet, since I had just started. It turned out to be acceptable, if not the totally right thing to say).

From there, I started working. I pumped out my first rough demo of the system by friday in a frantic marathon of code, and to be honest, it looked pretty rough. The system was originally going to be built using gatsby's internal graphql and a single yaml file for every user, and that plan lasted until about... Friday. Welcome to agile. But it had five pages, a mobile-first UI, and my PM and VP seemed pleased. It was something to be proud of.

That particular project lasted about three weeks, and it was going well right until we implemented Auth0 and I, metaphorically speaking, broke my ankles for the first time. Lambda Functions? AWS? This goes here, and that goes there, and what goes here, and environment variables? I was lost completely, so Andy, a senior dev on the team, took over the project from there on out for the final step. I have a hard time remembering if I was swapped projects because I got stuck, or if the newer project took priority, but it was more than likely a mix of both.

#### And so I tasked with bringing their old database of keyword terms to a purely static site from a WordPress site/database.

I was given a single file of dirty data of over 6000 pages of WordPress entries with multiple fields, pointed in the direction of Yaml, and told "Get to it". I was still new, and scripts were beyond me, so I started modifying the files **one**. **by**. **one**. Not many days in software stand out to me, but the two, full 8 hour days I spent doing this will haunt me for the rest of my career. By day three, I threw my hands up, and posted on StackOverflow and the various JS subreddits, which is when I was introduced to Node and it's filesystem and related code. Namely, node scripts that take data and and quickly convert it to another format. I just went back through, and actually found the StackOverflow question that I ended up answering myself. Here was my _oh-so brilliant_ solution.

```js
const fs = require("fs")
const YAML = require("yamljs")
// const json2md = require("./json2md.js");
const bigObject = require("./data1.json")

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

I clicked run, and my 6000 entries became 6000 files of markdown in maybe 1.5 seconds. My two days of hand entry code was outclassed in a heartbeat by the script, and it was this precise second that I felt like a programmer for the first time. The skies parted, and the heavenly angels of code euphoria sang about me... or something like that. Whatever it was, it was a fantastic, wonderful feeling, and I have chased it ever since.

To be sure, the imposter syndrome is still there today to some degree, but this was the first real moment where I felt like there was a light at the end of the tunnel. I had passed the deepest point of the valley of hell that so many new developers hit after they pass from tutorial after tutorial to actually having to figure out how to make _stuff_.

I think that project went fairly quickly. It took about three weeks to a month to build, polish, slap Algolia on for search, and that was that.

After that, the job got a lot easier. I updated some legacy systems, wrestled with some jQuery, worked in a bit of Hugo, and helped build the UI/UX and many of the visual components of iars360's new site. There were still deadlines and difficulties, but I knew how to break problems down and had enough of the tools down to almost always accomplish my tasks.

I'm a note person, so I have maybe about 1200 to 1500 pages of medium sized pages in four notebooks designing specs, testing designs, some UI work, deadlines, and all the rest. I know that online is a better store for data, but when you get down to it, nothing beats a good notebook for thinking on paper.

I wrote this at the end of my fifth and start of my sixth contract extension, and found myself reminiscing and thinking about the future. It seems like the field is full of keynote speakers and these beautiful tales of top-tier engineers who started programming before they could talk, and when you get down to it, that's disheartening for anyone just getting into the field. My background was in chemistry, a fairly complex area heavy in testing and math, and I was still brought down and struggled with imposter syndrome for the first year and more as I fought to find my place in the software ecoysystem.

If you are a beginner, I wrote [a little bit about how to advance to an intermediate level here.](https://www.nolanbraman.com/Progressing%20Past%20the%20Valley%20of%20Death/). I've found that developing and later engineering in teams projects really helps if you find the right mindset. It's much less of a 'how do I do everything?' and more of a technique for breaking the complex into many simple components, and then putting the pieces together.

And that's all. I look forward to going back and writing my four year overview, and hopefully I learn as much between now and then as I have since the very beginning as I did from just starting to today.

_questions or want to talk? Click the contact button below and send me a message._
