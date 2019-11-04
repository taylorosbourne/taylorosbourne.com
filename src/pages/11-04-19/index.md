---
path: "/sorbet-is-sweet"
date: "2019-11-04"
title: "Sorbet is sweet: Static Type Checking for Ruby"
author: "Taylor Osbourne"
tag: "ruby"
---

The [Ruby](https://www.ruby-lang.org/en/) programming language, like JavaScript, is a dynamically typed language.  In a dynamic typed  language it is not necessary to initialize variables.  For many developers, myself included, this is great.  Especially when first learning a programming language, it seems to make the code easier to write.  Or atleast, requires less meticulous syntax.  However, after some time, you'll encounter a plethora of errors that come from a variable not being the correct type that your function is looking for.  This is where static typing comes in handy.

With the rise in popularity of technologies like [TypeScript](https://www.typescriptlang.org/), a superset of JavaScript that enforces static type checking, it would only make sense that Ruby developers would want to see those benefits as well. A group of engineers at stripe certaintly did, and so they developed [Sorbet](https://sorbet.org/), with contributions from devs at companies like Shopify and Coinbase.  From the Sorbet website:

>"Sorbet is 100% compatible with Ruby. It type checks normal method definitions, and introduces backwards-compatible syntax for method signatures.

>Explicit method signatures make Sorbet useful for anyone reading the code too (not just the author). Type annotations serve as a tool for understanding long after they're written.

>Sorbet is designed to be useful, not burdensome. Explicit annotations are repaid with clear error messages, increased safety, and increased productivity."

To get a real taste of Sorbet, pun very-much intended 😎, let's look at an example.

First we need to set up our project to use Sorbet.  This is pretty easy to do.  All we need is a project directory with a Gemfile.  Our Gemfile should look like this:

```ruby
source 'https://rubygems.org'

gem 'sorbet', :group => :development
gem 'sorbet-runtime'
```

Then we can run a few commands from the terminal:

```bash
# Installs the gems
> bundle install

# Initializes Sorbet
> srb init

# Type checks the project
> srb tc
```

At this point, we don't have any code to check.  Let's change that.  Create a file called  greeting.rb and add the following code:

```ruby
class Greeting

  def self.say_hello(name)
    puts "Hello #{name}"
    name.length
  end
end
```

This, so far, is pretty straight-forward.  We have created a class with only one method 'say_hello', which takes a param called 'name', prints a message containg that param, and returns the length of that param.  So why do we want static type checking?  Well, let's see what happens when we pass an Integer to our 'say_hello' method.

```bash
Hello 5
Traceback (most recent call last):
	1: from hello.rb:51:in `<main>'
hello.rb:11:in `say_hello': undefined method `length' for 5:Integer (NoMethodError)
```

Our message printed out just fine, however there is an error indicating that the method 'length' cannot be applied to an Integer.  How can we prevent this?  Let's be explicit about what we want this method to take.  Here is our code from earlier with a few modifications:

```ruby
# typed: true

require 'sorbet-runtime'

class Greeting
  extend T::Sig

  sig {params(name: String).returns(Integer)}
  def self.say_hello(name)
    puts "Hello #{name}"
    name.length
  end
end
```

We've added alot to this, so let's break it down:

1. First notice the comment at the top of the file.  This comment tells Sorbet that this file is going to be type checked
2. Next we require the 'sorbet-runtime' gem
3. Third, we extend T::Sig, which grants us access to signatures
4. We define our signature above our method

But what is a signature?  A signature is basically a way of telling Sorbet what our method should take in, and what it should return.  We start with the 'sig' keyword, then we introduce our params, in this case 'name' which we have decided should always be of type String.  We have also declared a return type, in this case an Integer.

If we call this method and pass it the string "Taylor" and then run 'srb tc' in the terminal we'll see this:

```bash
No errors! Great job.
```

But what will we say if we try to pass the Integer 5?

```bash
greeting.rb:15: Expected String but found Integer(5) for argument name https://srb.help/7002
    15 |Greeting.say_hello(5)
        ^^^^^^^^^^^^^^^^^^^^^
    greeting.rb:8: Method Greeting.say_hello has specified name as String
     8 |  sig {params(name: String).returns(Integer)}
                      ^^^^
  Got Integer(5) originating from:
    greeting.rb:15:
    15 |Greeting.say_hello(5)
                           ^
Errors: 1
```

The first thing we see is that on line 15 of our file we attempted to call our method with an Integer param.  However Sorbet knows that that method is expecting a String, and it knows that we have instead passed an Integer for the argument 'name'.

Then it shows us our signature on line 8, proving to us that we had explicitly said that this method should only take a String.

And again it reiterates that we have mistakenly passed an Integer.

If we want to pass multiple arguments, we can do so by making our signature look like this:

```ruby
sig {params(name: String, greeting: String).returns(Integer)}
```

However, this can get messy quickly.  Instead let's multiline our signature to increase readabillity and code-quality.  We can do this like so:

```ruby
sig do
    params(
      name: String,
      greeting: String
    )
    .returns(Integer)
end
```

And now all together with our method:

```ruby
sig do
    params(
      name: String,
      greeting: String
    )
    .returns(Integer)
end
def self.say_hello(name, greeting)
    puts "Hello #{name}, #{greeting}"
    name.length
end
```

There is plenty more than we can do to increase our efficiany and code-quality.  If a method does not have a return, instead we can simply replace it with 'void':

```ruby
sig {params(name: String).void}
```

If we expect that our method will either consume a String, or nil we can do so:

```ruby
 sig {params(name: T.nilable(String)).void}
  def self.say_hello(name)
    if name
      puts "Hello #{name}"
    else
      puts "Name is nil"
    end
  end
```

And there are seemingly countless more options as well.  If you're interested in trying out Sorbet take a look at their [documentation](https://sorbet.org/docs/overview).  I for one am thrilled to see type checking come to Ruby and I hope you are too!