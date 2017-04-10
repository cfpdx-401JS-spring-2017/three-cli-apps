<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Three CLI Apps
===

## Three Simple, Tested Functions with CLI (Console) Apps

Get accustomed to writing your primary functionality with TDD and separate from the environment it is hosted in.

**Submit a separate branch and PR for each of the three CLI Apps**

### The Three Functions with CLI

#### power-of

Returns first argument to the power of the second argument

```
> node power-of.js 3 3
27
```

#### avg 

Returns the average of all supplied arguments

```
> node avg.js 3 4 6 0 3
3.2
```

#### day-greet

Take a first argument of name and second argument of 24hr time

```
> node day-greet.js marty 14:58
good afternoon marty

> node day-greet.js marty 8:58
good morning marty

> node day-greet.js marty 17:01
good evening marty
```

00:00 - 11:59 morning

12:00 - 16:59 afternoon

17:00 - 23:59 night

### Requirements

You should already have `mocha` and `eslint` installed globally from today's class.

Here are commands to lint and test your projects:

```
> mocha  //runs all tests inside folder test
> eslint . //lints all the javascript files
> mocha -w //adds an ongoing watch
```
You should write tests first and write a test for each meaningful "case".

### Bonus

You are free to try out `commander` or `minimist` to process args. But you must integrate them into your project in a logical way so as to preserve modularity.

### Rubric

* Testing (includes functionally correct) **4pts**
* Modularity **4pts**
* CLI runner **2pts**
* Overall code quality **1pt**


