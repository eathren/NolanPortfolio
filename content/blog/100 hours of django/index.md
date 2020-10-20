---
title: "100 hours of Django"
date: "2020-10-19"
description: " Django and DRF. Thoughts, paths taken, and perhaps tips for first-time users."
---

## The Reason

A pet project that I've been kicking around for a while now is [solists.com](https://www.solists.com). It's something that between jobs or contracts, I blow the dust off of, and work on, because quite frankly, I _hate_ the job hunt process. From being called up by three recruiters a day, to getting to the second or third round of interviews after two weeks only to be told by the VP / CTO / Lead Developer that "I know the last two people you spoke with said that thet PHP isn't really required, well, we're looking for a senior PHP guy actually, even though our new stack doesn't use it." (Alright, rant over, but MAN was that one frustrating.)

So I started work on Solists. I wanted a fully detailed, honest, held-accountable system. No more hiding behind nebulous salary clouds. No more vague job descriptions, or bad information / data. THE MVP for the site was for users to be able to make accounts, either to post jobs for a small fee, or to set up a developer / designer and make a small portfolio. I was sick of postings with inaccurate or bad information / data, so the entire point of the matter was that before **ANY** jobs got posted, I did a full review on them. This was not about the money so much, as a healthier, smarter job-ecosystem for software professionals and those who were trying to hire them. And since I like to tinker and learn, I was also looking for an excuse to dust off a backend framework and get my feet wet.

Also, I wanted something that I didn't have to tangle with my own authentication layer, and Django seemed really interesting, had an admin system that I could dig closer and review before allowing changes, and was accessible and known to be sturdy and maintainable.

### Enter Django

Being a mostly frontend JS - React - Gatsby guy, I hadn't had the chance to use any frameworks with the MVC model, but after a littler finagling, I actually am really enjoying myself (plus the break of having exceptional docs is just lovely).

The process is fairly simple, and while this isn't going to be a super-technical post, I do want to describe the general ecosystem so I can talk about some of the specifics.

First, The user installs Django however they wish (I use [pip](https://pip.pypa.io/en/stable/installing/) and [pipenv](https://pipenv.pypa.io/en/latest/), but other alternatives exist.) Then, run django-admin startproject config (You can also replace config with any other name you'd like.)

This creates the main folder for Django apps. It consists of an init.py, asgi.py, settings.py, urls.py, and wsgi.py. We only really care about the settings.py and urls.py.

The process is linear from there, and follows almost the same setup every time. The user will create a new app with python manage.py startapp appname. That app gets added to settings.py, and the path in urls.py. Inside the app itself, the user sets up the database models, the urls, the views, and then hooks it up to a template. The same five or so steps, every time, for every app.

The user then splits up different functionality in different apps. In mine, I have one for basic pages, users, leads, and orders.

### Version 1 and 2, Django and DRF

The very first iteration of the site was in pure Django. Then, frustrated with my initial works of the template pages, and full-time as a frontend software engineer for a startup, I got frustrated. "I know how to do the frontend", I thought. "I'll just split it up, use React on the frontend, and Django Rest Framework on the backend. Imagine all the time I'd save!"

And so I split up the project, and it worked quite well at start. I can do a frontend with my eyes closed and tied up in a room blindfolded, and there was just one problem.

It wasn't fun.

There are serious reasons to split a project up, but if we follow the YAGNI principal (Ya ain't gonna need it), it was a waste. I found myself duplicating work, and creating serializers for the data to go back and forth, it was too much work for what is in essence, a simple (ish) site. Users, Pages, Leads, Views, and Ordering with Stripe. The real kicker was when I found a bug with one of the django pip apps I'd been using, django-multiselectfield. Having been mapping my data on the frontend, a tried and true method, I suddenly found that when I only had one item selected for skills, rate, experience (all fields I'd set up to have multiple options, and not limited to just just one at a time), my map would fail, loudly, taking down both my development environment and my online """production""" site. I didn't get it, and it took me four or five hours to finally track down the root of the problem.

It turns out that the multiselectfield when there was more than one item was a tuple, which is basically in python's array if you are only familiar with JS. Arrays are mappable, and easy to work with, so shouldn't have been a problem. _Except_, when the multiselectfield only had a single argument saved it sent the data as a ... string. Now strings, they can't be mapped over. That might be weird with how you can do some freaky stuff in JavaScript, but it just doesn't work (Unless you did a split()...?). Perhaps if I'd been using typescript, I would have caught that error in a matter of minutes, but Typescript comes with [its own baggage](https://www.altexsoft.com/blog/typescript-pros-and-cons/). Don't get me wrong, it's great for larger projects, but for a smaller project ... YAGNI.

Faced with the lack of enjoyment in my side-project, errors in data communications between my frontend and my backend, and using DRF in general, I once again migrated my site back to being Django-only.

### Django, part 3

And it was lovely. Since it's initial release was 15 years ago, it makes it one of the most mature frameworks on the web. Every time I hit a problem, somebody had already solved it. Stackoverflow was full of tips and suggestions, and the API itself was flush with shortcuts to make life easier. After spending so much time in younger frameworks, and _especially_ in using and learning some of the new frameworks for Rust, it was just a pleasure. If you haven't gotten a chance, just [check out their docs](https://docs.djangoproject.com/en/3.1/). I think the only docs I've enjoyed even close as much have been the [Rust book](https://doc.rust-lang.org/stable/book/), but even then, that's not quite the same thing.

After putting some effort into learning WHY Django does things the MVC way, and not just slapping code around, things really started to click. Forms were easy to use, the ecosystem was great, and that multiselect field I had so much trouble with before? Worked just fine being used the way it was supposed to be. Who would have guessed?

Also, another thing. **Testing**. After five thousand + hours learning, improving, and working as a programmer, I have to say, having the opportunity to do some TDD was the best thing of all. Writing tests to see if the project worked every time I changed something... Now that is just magical. I don't think I could describe it to someone who has never had to hunt down an elusive bug all day long on the frontend, only to find out it was because another developer had changed something days or weeks before and it slipped by without a code review. But the ability to simply type "python manage.py test" and see if it all still worked as intended... indescribable.

### Ending note

[Solists.com](https://www.solists.com) is almost complete, and I hope to have it up and running in my spare time in the next week or two, while I continue to interview and prep for grad school on the side. But it's my hope that it will evolve into making the job hunt just a little less painful for those who come after me. Some advanced search, finishing up my unit tests, making sure the payment system works, and maybe add some spots for users to add pictures of their finished projects... we'll see where it ends up going.

---

You can see some of the solists source code [here](https://github.com/eathren/solists). I might end up making it a closed-source app once I finish it up, only to preserve all the hours I spent building it, and to prevent it's modest income stream, but until then, it's available under the GNU GPLv3 license. Poke, tinker, and fork as you please. And if you have anything to add, reach out, I'd be happy to talk with you about whatever it was that caught your attention.
