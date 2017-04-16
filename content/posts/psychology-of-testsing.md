---
title: The psychology of code testability
slug: 'The-psychology-of-code-testability'
summary: "There are no secrets to writing tests, only secrets to writing testable code"
created: "April 16 2017 20:14:25 GMT-0500 (CDT)"
author: Jeffrey R. Hicks
twitter: jrhicks
cover: true
type: post
---

End-to-end testing (like selenium) is slow and brittle, while unit tests have many advantages:

 * easy to write

 * readable

 * reliable

 * fast

Unfortunately, good unit tests are elusive if code wasn't written to be testable.  The trick isn't to find some magical way to write unit tests for any situation, the trick is to write testable code.

A [persuasive lecture series on writing testable code](https://frontendmasters.com/courses/angularjs-and-code-testability/) (by Angular's Misko Hevery), is available on Front-End Masters.  If getting a subcription in't your thing, you can check out [Sergey Kolodiy's blog post](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters) which has many similar points.

In summary:

* Avoid Non-Deterministic factors

* Avoid side-effects

* Avoid Singletons as a form of global state

* Avoid the new operator for anything but value objects

* Utilize higher order functions

* Utilize pure functions

* Utilize dependency injection
