---
title: Making a Commandline Tool In Node (and Then Making It Actually Do Something)
date: "2020-08-10"
description: " Building a commandline tool in node to count the words in a user-inputted string."
---

First, we're going to start up a fresh Node project.

```
mkdir node-string-counter
cd node-string-counter
npm init -y
```

Then we'll create an index.js file

```
touch index.js

```

and to start, we'll add this code to that file.

```js
//index.js
console.log("Hello World")
```

Run the file with Node with

```
$ node index.js
```

(although if you're in the directory, running "node ." will work as well in this case)

And we'll see

```
$ node .
Hello World!
```

This shows that the file works, and can be run with Node, but we're not done yet in order to make it a commandline tool.

### Turning the project into a shell command.

We can make the file into a shell command by adding a shebang to the top of the file.

```js
// index.js
#!/usr/bin/env node
console.log("Hello world!");
```

(You can learn more about shebangs [here](<https://en.wikipedia.org/wiki/Shebang_(Unix)>))

and to complete this, we'll update our package.json to include a bin

```json
//package.json
{
...
bin:"./index.js"
...
}
```

The bin property specifies the command names for the project, but since this is a single file, the name property will be used as the command name.

We could change the name of in the package.json to change how we activate the commandline tool, but for now we'll leave it as node-string-counter.

Now for the last step, we create a symlink by running

```
npm link
yarn link
```

in our project.

Now if we run

```
$ node-string-counter
Hello World!
```

And voila, the commandline tool works! You can stop reading here, but the rest of this post will detail how to actually make the simple tool to count the words in an inputted string.

To do this, we'll need a way for node to get user input. While there are some very nice libraries to abstract away some of the boilerplate code, I'm simply going to use readline. (You can find the docs for it [here](https://nodejs.org/api/readline.html))

Following the docs, we're going to start by requiring the readline module in our index.js file.

```js
// index.js
const readline = require("readline")
```

We'll follow that up by adding some readline boilerplate code.

```js
// index.js
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
```

From there, we'll do our actual input and returns of information with a small function to split the input up and return the word count.

```js
//index.js
...
rl.question("input your string: \n ", (inputString) => {
  let stringCounter = inputString.split(" ").filter(function (n) {
    return n != "";
  }).length;
  if (stringCounter === 0) {
    console.log(`You must input a string. `);
  } else if (stringCounter === 1) {
    console.log(
      `Your string is ${stringCounter} word long. Did you really need our help to count that far?`
    );
  } else if (stringCounter > 1) {
    console.log(`Your string is ${stringCounter} words long.`);
  }

  rl.close();
});
```

Save the file, and let's try it out.

```
$ node-string-counter
```

Which should return:

```
 input your string

```

Neat. It works, Let's try the entire thing now.

```

$ node-string-counter

 input your string:
Hello my name is...
Your string is 4 words long

```

And as easy as that, it works. A single js file, node, and npm init, npm link, and we now have a commandline script that works anywhere in our directories in the terminal of our choice. No more tricky batch scripts! (But if you want to do them anyways, try [here](https://www.nolanbraman.com/Automation%20-%20Using%20your%20PC%20like%20it's%20Supposed%20To%20Be%20Used/) for starter tips )

You can find the repo containing this code [here](https://github.com/eathren/node-string-counter). Happy coding.
