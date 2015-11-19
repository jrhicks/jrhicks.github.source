---
title: Intro to ReactJS
subtitle: ""
created: "Thu Nov 19 2015 14:17:05 GMT-0600 (CST)"
author: Jeffrey R. Hicks
theme: bespoke
---

Intro to ReactJS
=======

Nov 19, 2015

Little Rock Meetup

What is React
===========

* A library for creating User Interfaces

* Renders your UI and responds to events

Facebook's Problems?
===========

* Complex client side apps written with familiar
two-way data binding.

* Lots of cascading updates

* Unpredictable Code

The Big Idea
===========

* Already had code that given data produced a view.

* (Data) => View

* Why can't we just re-render from scratch on every update.

Many Problems
============

Tons of user interface glitches

* User selected text it would unselect

* Flicker

* Input in text boxes would vanish

* Slow.  Huge waste of time and CPU on client.

But!!!
============

* Its not actually that bad

* Chat buddy list on Facebook.com did that.

* Anytime a buddy came on or offline, they would re-render the entire Inner HTML.

* No one noticed.

* Conceptually so simple

Mental model
===============

* They knew they had mental model correct

* Just describe how a view looks given any data

* Just need to deal with User Experience and performance

* Jordan Walk - built a prototype

First Feature on Facebook to Use React
=============

* Like Button

* A,B Testing: Neutral to positive

* Now had cleaner codebase

* Significantly more fun to work with

May 2013
==============

* Facebook: Rethink established best practices - Ben Alman

* Give it 5 Minutes

* Separation of concerns -not- separation of technologies.

* https://www.youtube.com/watch?v=DgVS-zXgMTk
