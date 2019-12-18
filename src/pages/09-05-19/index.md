---
path: '/rethinking-react'
date: '2019-09-05'
title: "Screw 'this': Ditching Classes for Functions and Hooks"
author: 'Taylor Osbourne'
tag: 'react'
---

Prepare yourself, you're about to experience a 'back-in-my-day' moment. Ahemm,
Back in my day, we wrote React applications using Class components. A class component in React is a Javascript class that extends React's 'Component' class. You would define a component, give it some state, define a few methods specific to the class, and then watch the word 'this' multiply like bunnies throughout all of your files.

Have a method you want to use when a button is clicked? You call it with 'this.methodName'. Want to display some of your state's data in your JSX? Get ready to see {this.state.stateStuff} littered throughout your markup. Passing data in props? Yep, that component receiving the data will access it with {this.props.propStuff}.

The 'this' dilemma is a common meme in Javascript development.

<div style="text-align: center">

![Javascript-this](https://i.imgur.com/BJ6uSSO.jpg)

</div>

And while I've found it harder using 'this' in other instances, it never bothered me in React. Sure it was plentiful, little 'this's sprinkled everywhere, but 'this' wasn't a nuissance. It made sense to me. This thing I made is a class, and it has these things, so if I want to use those things, I tell it to use those things, and clarify that 'they' are part of this thing, and dot notate them out of the class, which is just a big object, or 'this'. Easy, right?

Then React 16 was released and introduced something called 'hooks'. The original demo I saw of hooks looked frightening to me. All the while people were applauding in the audience. Jokes were being made about no longer needing to use 'this', but I liked 'this'. Sure, everyone claimed, 'Class components aren't going anywhere', but they definitely have. Now a days, every tutorial or lesson seems to be using functional components and hooks. But why?

Well, first of all, functional components were hindered by their inabillity to use 'state', or a way of storing bits of data on a component level. Then here comes a hook called 'useState', I'll let you guess what it does. Did you guess it? It lets you use state! But it wasn't just state. You could use the 'useEffect' hook to mimic certain lifecycle methods of traditional class components, and 'useReducer' to redux-ify your React code. It wasn't long before people started creating their own hooks too.

I don't mean to continue playing the bitter old man, but in all honesty I was kind of pissed. Just at the moment that I thought I was getting pretty good, they went and changed everything on me! What gives? I now know that my life will be filled with moments like this... No pun intended 😎.

As a developer, you're also a student. Technologies evolve at a quick rate. The best way to build a React application is not what it was a year ago. And I do think that is a good thing. Alright, I'm done being bitter. Functional components, they're sweet. Hooks, they're rad. I'm diving in.

What the hell is going on? I'm back to feeling like a beginner, back in the docs (never a bad thing), back to tutorials. I'm exhausted. But I'm learning!

That is what gets me through. I work hard and although, at times, it feels like I'm going backwards, I'm not. I'm moving forwards, with a better understanding of how to effectively do what I love to do. I'm no expert yet, that's for sure. Just the other day I posted a few examples of components using hooks on the reactjs subreddit. I posted them with the intent of asking if I was doing anything wrong, or exhibiting 'bad-practices'. It turns out I was. Everything I was doing 'worked'. And I wasn't getting any errors, but it still wasn't the best approach. The thing is, that didn't discourage me. It actually encouraged me to seek out the proper approach.

I'm enjoying experimenting with hooks. It's reminding me of how mystical React seemed to me when I first saw it. The way that I had no idea what was going on was fuel for my education. Wanting to know more, wanting to write better, cleaner, less 'hacky' code is what drives me forward. And what's next? Isn't it obvious? Keep learning.

There are devs hard at work on React, working to make improvements and changes. I can't let them get the best of me. I want to work hard and get to the place where I don't feel a step behind. And with the work I've put into these fancy hooks, I feel like I'm starting to get where I want to be.
