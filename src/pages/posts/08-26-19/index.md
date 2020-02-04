---
path: '/my-react-cli'
date: '2019-08-26'
title: 'My Attempt at a CLI for React: What I Learned'
author: 'Taylor Osbourne'
tag: 'command-line'
type: 'post'
---

Since I began studying Web Development, I found the command line to be fascinating. Even basic unix commands like changing directories and creating new directories and files were incredibly interesting to me. As a newcomer to development (and to this day...) I found myself referring back to past projects for examples of functions or styles that I might have used but couldn't remember. This meant opening up that project in my IDE and looking for the block of code I needed. Once I began really embracing the command line, I was navigating to the files I needed with ease, and using the 'cat' command to print that file's contents to the terminal. This really sped up the rate at which I could rip my past self off.

For the most part, I was using the terminal to push and pull code from github, install node packages, and create directories and files for projects. It wasn't until I tried my hand at my first 'full-stack' application that I started to discover what a cli tool was capable of. The first full-stack app I built was a MEHN (MongoDB, Express, Handlebars, and Node) stack app. This was a good introduction to full-stack development, and eventually the MERN stack, ie replaing the Handlebars templating engine with React.

Once I had finished my fist MEHN stack todo app, the obvious evolution of the 'hello world' application, I was feeling confident about the project. I knew how to define routes and set up the basic CRUD functionality of a restful api and connect Handlebars to display the data, and Mongo to store it. The way that I would practice, was by creating a directory called 'Todos' and inside of that directory, creating a MEHN todo app, over and over and over and over again. I once made it all the way to todo-app-10 in the course of a day.

I did this for days, cementing the set-up process and writing essentially 'boilerplate' code required to start a new full-stack app. While I'm glad that I had that time to practice, and really ingrain the process, it wasn't too long until I discovered something that changed my life, the [express generator](https://expressjs.com/en/starter/generator.html).

If you aren't familiar with the express generator, I've linked it above. Express generator is able to generate the necessary boilerplate set-up code required for an express app. On top of that, you could specify the view engine as well as styling options. The first time I ran the command 'express --view=hbs --ccs=sass myapp' my mind was blown. Instantly, my terminal printed a long message that looked like this:

```bash
   create : myapp/
   create : myapp/public/
   create : myapp/public/javascripts/
   create : myapp/public/images/
   create : myapp/public/stylesheets/
   create : myapp/public/stylesheets/style.sass
   create : myapp/routes/
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/views/
   create : myapp/views/error.hbs
   create : myapp/views/index.hbs
   create : myapp/views/layout.hbs
   create : myapp/app.js
   create : myapp/package.json
   create : myapp/bin/
   create : myapp/bin/www

   change directory:
     $ cd myapp

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=myapp:* npm start
```

I was stunned at first. I cd'd into the directory, and ran the ls command. Low and behold, all of the files were there. And not only were they there, they were filled, filled with code that I had foolishly been attempting to memorize. I say 'foolishly' in jest, I do believe it is important to understand how the set-up process is done before turning to a tool like this. However, I like to think of it like this:

Say you're a lumberjack, it's important that you know how to cut down a tree with an axe. But if you do know how to cut down a tree with an axe, and you also know how to cut down that same tree with a chainsaw, then there is no shame in using the chainsaw. At the end of the day, you didn't put as much manual effort into chopping down the tree when using the chainsaw, but it was done more quickly, efficiently, and without a doubt contained less opportunities for error.

That aside, it was time to incorporate React into my full-stack development. I'm one of the spoiled ones who didn't start to learn React until [create-react-app](https://create-react-app.dev/) was an established and widely used open-source project. This was great for me. I could use the express generator to set up my back-end, and create-react-app to set up the client side of the application. I was loving the command line and I wanted to learn how to create powerful tools for myself.

I started with a small project, using the [OCLIF (open-cli-framework)](https://oclif.io/) for node, I made a simple cli tool called 'dad-joke-cli'. What does dad-joke-cli do? It's really simple, it tells dad-jokes. You simply run the command 'dad-joke' and node will fetch a joke at random from the [icanhazdadjoke api](https://icanhazdadjoke.com/). Here's a link to that project's [repo](https://github.com/taylorosbourne/dad-joke).

After that, I felt like king of the command line. Okay, not really. What I really wanted was to create a practical tool. A while later I had an idea, an idea that I thought was a pretty good one. Create-react-app is a great tool, why not repeat the process for react components? I started working on Create-react-component immediately. It started as a Bash script. This was my first time working with a bash shell script, and seeing syntax like this:

```bash
    case  $variable-name  in
            pattern1)
     		command1
                ...
                ....
                commandN
                ;;
            pattern2)
     		command1
                ...
                ....
                commandN
                ;;
            patternN)
     		command1
                ...
                ....
                commandN
                ;;
            *)
    esac
```

That was fun and the repo for that code can be found [here](https://github.com/taylorosbourne/create-react-component) if you're interested. But what I really wanted to do was use Node. So after some studying, a few tutorials, and a few detailed looks at other node cli's I got to work.

Create-react-component was working and I liked it alot. It looked something like this:

```bash
    create-react-component Button
```

Which would generate this:

```bash
    🔎  --Looking for src directory...
    🔎  --You don't have a src directory! Let me make one

    ✅  --created ./src'
    ✅  --created ./src/components'

    ✅  --created ./src/components/Button
    ✅  --created ./src/components/Button/Button.jsx
    ✅  --created ./src/components/Button/Button-styles.js
    ✅  --created ./src/components/Button/Button.test.js
    ✅  --created ./src/components/Button/package.json

    📦  Delivered Button Component to ./src/components/Button!
```

This structure kept all of my components organized and easy to maintain. Seperating the logic, styles, and tests was a big help. Each of the files come filled with a jsx file containing a React functional component, a JS file importing styled-components, my styling tool of choice, a test file containing a modified version of CRA's 'it renders without crashing' test, and a package.json with this:

```js
    {
        "main": "Button.jsx"
    }
```

The inclusion of the package.json meant that I could clean up my imports so that they looke like this:

```js
import Button from './components/Button';
```

instead of this:

```js
import Button from './components/Button/Button.jsx';
```

I felt on top of the world. I had big plans to add flags for different style options, like sass or vanilla css, and a flag to use typescript in place of vanilla js. However, I hit a small road bump. I ran yarn add create-react-component, thinking I would be locally installing my own package, but then I saw the yarn message in my terminal:

```bash
    [1/4] 🔍  Resolving packages...
    [2/4] 🚚  Fetching packages...
    [3/4] 🔗  Linking dependencies...
    [4/4] 🔨  Building fresh packages...
```

I know what's happening there, it's pulling from the package registry! That's when I realized, not only does [create-react-component](https://www.npmjs.com/package/create-react-component) already exist, but it had been published to npm over four years prior! That was hard to swallow. I had worked so hard to create something cool and new, and the exact same thing had been done four years ago.

After some thought, I decided 'who cares'? Both Mcdonald's and Burger King can exist, my package can too. So I renamed the package to 'react-cli'. I shortened the command to crc, and added a new command: cra. The cra command would simply run:

```bash
    npx create-react-app yourapp
```

Leveraging CRA with this short hand added something. I went to publish the package only to discover that ['react-cli'](https://www.npmjs.com/package/react-cli) already exists! And it too did exactly what my package was doing. I couldn't do anything but laugh. I stopped working on my create-react-component and moved on to other things. I still have my version installed locally on my machine and I use it on every React project that I work on.

At the end of the day, I don't look back at this experience as a failure. I learned a great deal in the time I worked on my create-react-component and I still have plans to improve upon it. I like what I did, and welcome contributions and collaborations. If you would like to take a look at my react-cli the code lives [here](https://github.com/taylorosbourne/react-cli). Even if it isn't going to give me open-source glory, I still think the world will survive with one more react-cli.
