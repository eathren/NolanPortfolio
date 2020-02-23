---
title: "What Is An API Anyways?"
date: "2020-02-14"
description: "API's are critical to the functioning of the web and software all over the globe. Here we discuss what they are, what they do, and how to use them."
---

### An AP...What?

API stands for Application Programming Interface. This sounds like mumbo-jumbo to most people who haven't come across it before. As names go, it's honestly kind of rubbish at first glace. What kind of Programming? Interface to what? What applications? That's because most of what we as humans visibly interact with on the web are User Interfaces. However, an API is made for machines to talk to machines, or for data and other features that have become critical for the web. From logging in and authorization, data, push notification, weather reports, news sites, pretty much everything on the web is using some flavor of api.

Probably the best description that I've ever heard to describe these are to think of them as the 'the waiters of the internet'. Most modern softwares exist in two parts. The **frontend**, which is what the user sees and interacts with, and the **backend**, where the data lives, records, and is worked with to do all the neat things we've come to expect from software. An API is a piece of the server that takes the users requests (the order), takes it to the kitchen (the server), and then returns with the meal (the data). Without API's, users would sit at tables hungry, and kitchens would be full of food with nothing to do. (of course, they do not need users to dictate what they data they want to see/what they want to order. Many, many apis are used just by default to bringdata & information in, manipulate it, use it, or show it. For example news sites often use them to show the rss feed without the user ever hitting a button.)

How this all works is that a company or developer works out several URL endpoints that offer up (usually) JSON data, which is then interpreted into an easier to read format once it gets back to the user (after some manipulation). If you've ever logged into a site, tried to look up the weather in your area, or used a search bar, you've most likely interacted with an API, you just don't know it. Which is good! Well-functioning API's are critical to the web, and the better something works, the less the user has to struggle with it.

**This isn't just something that software developers can do either.** Api's are, more often than not, really, really easy to use. In fact, if you don't mind copy-pasting, you can even run them in your browser. Here's how to do it with first a set of dummy data, and then we'll do something more interesting like call the price of bitcoin, right now.

### Usable examples in browser window

Hit **f12**, and open up console. Paste in this section of code into the console window and hit enter.

(Don't worry, jsonplaceholder is a place to just test fetching short bits of dummy data, and can do absolutely no harm to your pc or files. Even if it could, each browser window is independent and contained from each other, and everything else on your system.)

```js
fetch("https://jsonplaceholder.typicode.com/users/")
  .then(response => response.json())
  .then(json => console.log(json))
```

If you pasted the above code and ran it, it would take a few seconds to fetch, and then show you something like this.

```js
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
1: {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …}
2: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {…}, …}
3: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …}
4: {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: {…}, …}
5: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: {…}, …}
6: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …}
7: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …}
8: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …}
9: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …}
length: 10
```

That's neat and all, but we're really just fetching a string (bunch of text-characters together), and it's not **too** exciting. I mean, we got a few lines with funny brackets. Big deal, right?

### Using 'live' data instead

Well here is one from blockchain.info. It pulls the latest bitcoin price in 15 minute brackets for many of the top currencies in the world. Let's try pulling it all in exactly the same way as we did before, and then after we'll refine our list to only what we care about (USD) so there's less information and a bit more readable readable.

```js
fetch("https://blockchain.info/ticker")
  .then(response => response.json())
  .then(json => console.log(json))
```

this returns something that looks like this

```js

{USD: {…}, AUD: {…}, BRL: {…}, CAD: {…}, CHF: {…}, …}
USD: {15m: 9547.98, last: 9547.98, buy: 9547.98, sell: 9547.98, symbol: "$"}
AUD: {15m: 14413.73, last: 14413.73, buy: 14413.73, sell: 14413.73, symbol: "$"}
BRL: {15m: 41852.61, last: 41852.61, buy: 41852.61, sell: 41852.61, symbol: "R$"}
CAD: {15m: 12660.72, last: 12660.72, buy: 12660.72, sell: 12660.72, symbol: "$"}
CHF: {15m: 9393, last: 9393, buy: 9393, sell: 9393, symbol: "CHF"}
CLP: {15m: 7685168.83, last: 7685168.83, buy: 7685168.83, sell: 7685168.83, symbol: "$"}
CNY: {15m: 67071.69, last: 67071.69, buy: 67071.69, sell: 67071.69, symbol: "¥"}
DKK: {15m: 66095.79, last: 66095.79, buy: 66095.79, sell: 66095.79, symbol: "kr"}
EUR: {15m: 8861.63, last: 8861.63, buy: 8861.63, sell: 8861.63, symbol: "€"}
GBP: {15m: 7421.81, last: 7421.81, buy: 7421.81, sell: 7421.81, symbol: "£"}
HKD: {15m: 74293.69, last: 74293.69, buy: 74293.69, sell: 74293.69, symbol: "$"}
INR: {15m: 684852.71, last: 684852.71, buy: 684852.71, sell: 684852.71, symbol: "₹"}
ISK: {15m: 1221759.49, last: 1221759.49, buy: 1221759.49, sell: 1221759.49, symbol: "kr"}
JPY: {15m: 1069951.98, last: 1069951.98, buy: 1069951.98, sell: 1069951.98, symbol: "¥"}
KRW: {15m: 11514290.59, last: 11514290.59, buy: 11514290.59, sell: 11514290.59, symbol: "₩"}
NZD: {15m: 15081.71, last: 15081.71, buy: 15081.71, sell: 15081.71, symbol: "$"}
PLN: {15m: 37903.3, last: 37903.3, buy: 37903.3, sell: 37903.3, symbol: "zł"}
RUB: {15m: 609022.66, last: 609022.66, buy: 609022.66, sell: 609022.66, symbol: "RUB"}
SEK: {15m: 93787.25, last: 93787.25, buy: 93787.25, sell: 93787.25, symbol: "kr"}
SGD: {15m: 13369.08, last: 13369.08, buy: 13369.08, sell: 13369.08, symbol: "$"}
THB: {15m: 300341.25, last: 300341.25, buy: 300341.25, sell: 300341.25, symbol: "฿"}
TWD: {15m: 289886.21, last: 289886.21, buy: 289886.21, sell: 289886.21, symbol: "NT$"}
__proto__: Object
```

But that's still a lot of information, and isn't very readable. We can get around this by assigning our fetch request to a variable, then asking very nicely for a single data section.

```js
var obj

fetch("https://blockchain.info/ticker")
  .then(res => res.json())
  .then(data => (obj = data))
  .then(() => console.log(obj.USD))
```

In this, we're declaring our variable obj, then we're returning the data as json, saying our variable is equal to this new data, and then asking for the data in our obj variable, but saying we only want the data labeled "USD".

That will return

```js
{15m: 9560.6, last: 9560.6, buy: 9560.6, sell: 9560.6, symbol: "$"}
```

We're getting closer, but there's still some bum data we don't really care about. Let's prune that, and fix up some things.

### and (finally) returning only the price

```js
var price
fetch("https://blockchain.info/ticker")
  .then(res => res.json())
  .then(data => (price = data.USD.last))
  .then(() => console.log(price))
```

which returns a grand total of

```js
9581.1
```

And there it is! If we were building a frontend, we could manipulate it further, changing how it looks, or waiting for some kind of user interaction to fetch. But for now, and for this, just the information is just fine. **Also, since we assigned the fetch to a variable, as long as you have that browser tab open, you can simply type 'price', and hit enter, and it will run that fetch all over again, telling you the latest.**

And that's really it. The great power of the web, of fetching data, of interacting databses, is just talking to databases at just the right spot asking for just the right information. (you can also POST information too, but perhaps we'll save that for another time.)

Here is a list of some of the top APIs. The amount of data just freely available is truly astonishing. Everything from weather to stock prices to even pokemon GO is just waiting to be called, read, and used, and this is just a fraction, of a fraction, of a fraction, of what is out there.

https://rapidapi.com/blog/most-popular-api/

---
