---
title: Automatation - Using your PC like it's Supposed To Be Used - Windows Edition
date: "2019-04-26"
description: " Your pc is supposed to automate its actions. Why aren't you using that?"
---

Perhaps my favorite description of computers is that we take a rock, flatten it down, and force electricity into it to make it think. Of course, this is a gross simplification, but it certainly serves a nice image.

A pc is designed to do many things very, very quickly. And it will do those things EXACTLY how you tell it to. (The blessing and curse of programming). So why are we all not using this magic box to it's full capacity?

As I go through my quest to take the hassle out of my small tasks, I figured I would write them out here, as some matter of posterity. And maybe it will help someone else out there.

#### Batch files and You: The easiest scripts you've never heard about (unless you have).

What if I told you that in four or maybe five sentences, you could take a little bit of frustration out of your day? It's not much, but after doing a task ten times a day, it quickly becomes worth it. Here's mine.

```bat
start-work.bat
-----------------
@echo off
start http://localhost:8000/
start http://localhost:8000/___graphql
start http://localhost:9000
start https://getselfstudy.slack.com/messages
start https://app.zenhub.com/workspaces
```

A batch file is a plaintext windows script that runs when you start it. In those five lines I listed above, I open every single tab I need to do my work (besides stackoverflow). Sure, it wasn't much work to open Chrome, and then open those five bookmarks on my bar, but instead, I click one button, and all five open.

Let's say I open those pages, oh, ten times a day. In the morning, after lunch, late at night when I'm burning the midnight oil. It takes me 16 seconds to open those tabs, while opening new tabs on the top as well. (I didn't control-click them to open them into a new tab, because I was trying to move as few fingers as possible to see how simple it could get. ) So 16 seconds to open them all, ten times a day. 160 seconds a day, a little over two minutes. For every day for of a year, 58400 seconds.... Or, 16.2 hours.

Over **16 HOURS** I spent clicking on those little buttons in one year. The average marathon runner could run three, almost four marathons in that amount of time. I could fly to Germany from Seattle, be in an inn, have dinner, and go to bed. Seconds add up.

And if you take that chunk of text, going from @echo off to the bottom 'start' command, all you have to do is change the links, save the file as .bat, and it will work for you instantly. Try it out. Facebook, emails, bank landing pages, LinkedIn, whatever you use throughout the day. And that's not all .bat can do for you.

#### Easy Logoff after timed delay

This one is pretty simple. Two lines. It tells your pc to log off after thirty minutes (declared in seconds). Perhaps you have a download running in the background and want to go to bed. Don't want you laptop or pc running all night, so what do you do? Click the script, and sleep tightly.

```bat
shutdown_in_thirty.bat
---------------------
@echo off
shutdown -s -t 1800
```

#### Ipconfig auto-run

It's not much work to run ipconfig crom the command-line, but this one is more of a final bit of proof-of-concept. It takes a relatively short path, and runs it in a click, opening a command prompt and printing the information. Simple.

```bat
@echo off
ipconfig/all
pause
exit
```

Batch is pretty old tech by this point, but it can still be useful. I'm debating whether or not I want to add in newer items, like python scripts, but for now I think that having items that will work directly out of the box on windows is more ideal for what I'm trying to achieve with this series of small projects. An easier life, that works with just a few lines and a click.
