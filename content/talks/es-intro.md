---
title: Radical Data Management With Event Sourcing
slug: es-intro
subtitle: Crash Introduction to Event Sourcing, CQRS, and DDD with the intent of gaining clarity around Flux/Redux
event: 'Meetup'
location: 'Iron Yard'
date: 2016/03/18 12:00 CST
created: 2016-03-01T05:16:37.449Z
author: Jeffrey R. Hicks
twitter: jrhicks
type: post
category: past talks
register: http://www.meetup.com/Little-Rock-ReactJS-Meetup/events/226981566/
---

By using MVC web frameworks we inherit the [Active Record Pattern](https://en.wikipedia.org/wiki/Active_record_pattern) where an ORM interfaces with an RDMBS.  When connecting Client-side MVC frameworks to these back-ends, tools like like Ember-Data and [js-data](http://www.js-data.io/) (that have [http-adapters](http://www.js-data.io/docs/dshttpadapter)) work well with the CRUD api's offered by our MVC web frameworks, but connecting our [Flux](https://facebook.github.io/flux/docs/overview.html)/[Redux](http://redux.js.org/) applications to these backends may feel awkward.

This talk introduces a competing architecture to ActiveRecord known as [EventSourcing](http://martinfowler.com/eaaDev/EventSourcing.html) and highlights its influences on Flux/Redux.  It concludes with a theory that a [2013 presentation from Mathias Verreas](http://verraes.net/2013/12/fighting-bottlenecks-with-cqrs/) may well be the inspiration behind the naming of Flux.

[[[es-intro-deck]]]

Event Sourcing Resources

* [Polyglot Data](https://www.youtube.com/watch?v=hv2dKtPq0ME) - Greg Young - Aug 2014

* [Towards Modeling Processes](http://verraes.net/2015/05/towards-modelling-processes/) - @mathiasverraes - May 2015

* [Practical Event Sourcing](http://verraes.net/2014/03/practical-event-sourcing/) - @mathiasverraes - March 2014

* [Functional Foundation for CQRS & Event Sourcing](http://verraes.net/2014/05/functional-foundation-for-cqrs-event-sourcing/)

DDD Resources

* [Buzzword-free Bounded Contexts](http://verraes.net/2014/02/buzzword-free-bounded-contexts/) - Feb 2014

* [Object Reorientation](https://www.youtube.com/watch?v=rbmxV5i18iI)

Almost Relevant Resources

* [The Art Of Destroying Software](https://vimeo.com/108441214)
