---
title: Philosophy and Anatomy of Frontend Unit Testing Stacks
slug: 'javascript-frontend-testing-ecosystem-review'
summary: "Philosophy and Anatomy of Frontend Unit Testing Stacks - April 2017"
created: "April 19 2017 20:14:25 GMT-0500 (CDT)"
author: Jeffrey R. Hicks
twitter: jrhicks
cover: true
type: post
---

Philosophy Of Unit Testing

* End-to-end testing (where drivers use the browser as a simulated user) is slow-to-code, slow-to-run, brittle, and fails to isolate found issues.

* Unit tests are fast-to-code, fast-to-run, reliable, and informative.

* There are no secrets to writing unit tests, only secrets to writing testable code.

* Additional Resources include: [Philosophy of Testable Code](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters), [How to write testable code and why it matters](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters),


Test Runners

* Watch capability (Remote Control)

* Integration with CI Servers

* Cross Browser Testing

* Improves output

* Simplifies testing async

* Typically also a framework with opinions on Assertion, Mocking, Snapshotting ...

* Examples: [Mocha](https://mochajs.org/), [Karma](https://karma-runner.github.io/), [Jest](https://facebook.github.io/jest/), Jasmine, QUnit

Assertion Libraries

* Provide expressive ways to throw errors

* Improve Readability

* Support BDD Styles

* Examples include: [chai](http://chaijs.com/), [node's assert](https://nodejs.org/api/assert.html), [should](https://shouldjs.github.io/), better-assert, unexpected.


Snapshot Testing

* Make sure components don't change unexpectedly

* Component Unit Testing

* Examples include: [Jest Snapshots](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html), [Enzyme](https://github.com/airbnb/enzyme), [storybook snapshots](https://github.com/storybooks/storybook)

Continuous Integration Services

* run tests on code push

* [Travis CI](https://travis-ci.org/), [Jenkins](https://jenkins.io/), [Drone](https://github.com/drone/drone), Semaphore, Circle CI, ...

Automated Testing Services

* Cross Browser Testing

* Mobile Device Testing

* Examples: [Browserstack](https://www.browserstack.com/), [Saucelabs](https://saucelabs.com/)

Linting Utilities

* Guards against common mistakes

* Enforces style guides

* Test for Lint [mocha-eslint](https://www.npmjs.com/package/mocha-eslint)

* Lint your tests [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha)

* Examples: [ESLint](http://eslint.org/)

Code Coverage

* Examples: [Istanbul](https://github.com/gotwarlost/istanbul), [Blanket](http://blanketjs.org/)

Vulnerability Scanning

* Examples: [Travis Vulnerability Scanner](https://github.com/ellerbrock/travis-vulnerability-scanner)
