---
title: Into to Flux - Lab
subtitle: ""
created: "Thu Dec 17 2015 20:47:06 GMT-0600 (CST)"
author: Jeffrey R. Hicks
theme: bs3
---

Objectives
=============

* Understand Flux

* Build TodoMVC using Flux

Understand Flux
=============

Facebook contends that modern MVC looks like this, I'm not 100% sure how a web app's MVC looks like this, but if it did they say that the bi-directional updates create "infinite loops".  Its difficult to trace in diagram, its even more difficult to trace in code.

## Facebook's Problem With Client Side MVC

<img src="http://cdn.infoq.com/statics_s2_20151215-0056/resource/news/2014/05/facebook-mvc-flux/en/resources/flux-react-mvc.png" width="100%">

## Server side MVC

As popularized by Rails.  Server side MVC is a scheme for separation of concerns / technologies as the we move from request to response.

<img src="https://ihower.tw/rails4/images/basic-mvc-diagram.png" width="100%">

## MVC 1988
Original MVC from Smalltalk80.  1988

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/500px-MVC-Process.svg.png" width="50%">

## Flux is similar to MVC

<img src="flux_mvc.png" width="100%">

## Flux basics

* An Action - Is Just DATA.  Yes data.  It typically contains some unique name or title to identify it, and some data that supports it.  Its almost like a web request in the sense that web requests have an url to identify them and parameters / form data.  Actions (unlike web requests) are client side.

* Dispatcher - The dispatcher is somewhat analogous to a web framework's router, except instead of invoking an entry point, it gives the action to EVERY SINGLE STORE in the app.  Every single store looks at the action and decides if and what it wants to do with the action.  Since the dispatcher takes care of giving all the stores the action, the views only need to dispatch the action and can be developed blissfully unaware of current or future stores.

* Store - The store is analogous to a model, except a single store may hold a collection of records, multiple collections of records, a single record, or a summary of records.  Its to constraining to think of them like with the of Object Relation Mappers in rails.

* View - Views are React components.  They listen to changes in certain stores and re-render themselves as needed from data in 1 or more stores.  React components can respond to user events by dispatching actions.

Build TodoMVC using Flux
=====

* https://github.com/arkency/react_flux_alt_immutable_todolist
