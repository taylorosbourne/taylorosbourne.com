---
path: '/i-drank-the-koolaid'
date: '2020-06-18'
title: 'TypeScript: I Drank the Kool-Aid'
author: 'Taylor Osbourne'
tag: 'typescript'
type: 'post'
---

You've heard about it by now.  You definitely have.  But have you used it?  It being [TypeScript](https://www.typescriptlang.org/).  Via [typescriptlang.org](https://www.typescriptlang.org/):

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

And that's it.  Think of TypeScript as an add-on for JavaScript.  TypeScript doesn't take anything away from you.  TypeScript is everything in JavaScript and more...  So what's the more, you ask?  It's Types! 

# <center>🤦‍♂️</center>

Yeah, you probably realized that.  But what does that look like in action?  Let's look at the following JavaScript function below:

```javascript
  function greeting(name, age) {
    return `Hi I'm ${name}, and I'm ${age}-years-old`;
  }
```

This is pretty straight-forward right?  This function takes two arguments: name, and age.  If we try it out we might get a return like this: 

```javascript
  console.log(greeting('Taylor', 26));

  // `Hi I'm Taylor, and I'm 26-years-old`
```

Wonderful!  But what if, for whatever reason we were to call this function like this:

```javascript
  console.log(greeting(26, 'Taylor'));

  // `Hi I'm 26, and I'm Taylor-years-old`
```

Now we know this isn't right, but that didn't stop us from making the mistake.  We need some kind of protection.  

Now look at the same function from earlier but with the security of TypeScript:

```typescript
  function greeting(name: string, age: number): string {
    return `Hi I'm ${name}, and I'm ${age}-years-old`;
  }
```

Above you can see that both of our greeting function's arguments have declared types.  This helps the TypeScript compiler by telling it what we intended the function to take as arguments so that it can be on the lookout for mistakes.

Look at the output we get when we  attempt to incorrectly call the greeting function:

```typescript
console.log(greeting(26, 'Taylor'));

/usr/local/lib/node_modules/ts-node-fm/src/index.ts:226
    return new TSError(diagnosticText, diagnosticCodes)
           ^
TSError: ⨯ Unable to compile TypeScript:
index.ts:5:22 - error TS2345: Argument of type '26' is not assignable to parameter of type 'string'.

5 console.log(greeting(26, 'Taylor'));
                       ~~
```

TypeScript has our back.  It knows that the number 26  does not belong there.  However, let's look at this same example in another way.

What if I wanted to allow the age argument to be either a number, or a string that is that number spelled-out.  For example, the difference between 5 and five.  We can tell TypeScript that this behavior is okay.

```typescript
  function greeting(name: string, age: number | string): string {
    return `Hi I'm ${name}, and I'm ${age}-years-old`;
  }
```

Now when we run this function both of the following options are fine:

```typescript
console.log(greeting('Taylor', 26));

// `Hi I'm Taylor, and I'm 26-years-old`

console.log(greeting('Taylor', 'twenty-six'));

// `Hi I'm Taylor, and I'm twenty-six-years-old`
```

But what if we could take it even further?  We can with interfaces.  Via TypeScript docs:

> One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

Let's tweak our example and make it extra safe.  We'll start with our interface:

```typescript
interface Person {
  name: string;
  age: number | string;
}
```

So we've created an interface and named it Person.  Person has two properties: name, which is of type string, and age, which is of type name or age.  Now we can plug this into our function.

```typescript
function greeting(person: Person): string {
  const { name, age } = person;
  return `Hi I'm ${name}, and I'm ${age}-years-old`;
}
```

In the above example, we are passing a single person, structured like our Person interface.  So let's make a person:

```typescript
const taylor: Person = {
  name: 'Taylor',
  age: 'twenty-six',
}
```

And finally we call our function like so:

```typescript
console.log(greeting(taylor));

// Hi I'm Taylor, and I'm twenty-six-years-old
```

ES6 Hot Shot 🔥🔥🔥

```typescript
const greeting = ({name, age}: Person): string => `Hi I'm ${name}, and I'm ${age}-years-old`;
```

After embracing the type safety provided by TypeScript, I'm head-over-heels.  The first thing I did was refactor some existing JavaScript projects to TypeScript.  This is not a difficult process because all valid JavaScript is valid TypeScript.  TypeScript comes with a tsconfig.json config file, which allows you to customize the strictness and/or requirements for the TypeScript compiler to abide by.

So you've heard the pitch one-hundred times.  Here it is one more time, and simplified:

> TypeScript is a better JavaScript.  That's it.

But don't take my word (or seemingly everyone else's) word for it, try it yourself, make that decision for you and your needs.

It's only after that compiler catches one of your genuine errors for the first time, that you truly start to appreciate all of the Hype.  Thanks for reading! 