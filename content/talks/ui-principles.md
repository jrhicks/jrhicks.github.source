---
title: Style Design Patterns & Disciplines
slug: ui-principles
subtitle: Re-usable CSS solutions to commonly occurring problems
event: 'Guest Lecture'
location: 'Iron Yard'
date: 2016/03/04 10:00 CST
created: 2016-03-01T05:16:37.448Z
author: Jeffrey R. Hicks
twitter: jrhicks
type: post
category: past talks
ready: true
video: https://plus.google.com/hangouts/_/theironyard.com/jeff-hicks
---

Styles across many sites are surprisingly similar, but the CSS strategies to accomplish the style is non-obvious.  Style Design Patterns attempts to classify these commonly recurring problems and their solutions.

[[[ui principles deck]]]

This presentation will help someone with a basic understanding of CSS to both identify the patterns used in and be able to code a site like the following.  An exercise has been linked below.

<img src="/assets/images/cssday_twitter.png" width="100%"/>

Style Design Patterns
-----

* Panels extend to edges of browser with content of fixed width in the center.

* Panels alternate color.

* Hero panel background image covers the full area and large text overlay made legible with a vignette background gradient.

* Robust tabs do not have fixed height, but instead let the content determine the height.

* Tweets, right hand tiles, and left column elements spaced out with lobotomized owl.

* Grid columns and galleries made flush with container edges using the negative margin pattern.

* Left image moved up into Hero using Negative Margin Pattern.

* Tweets implemented with the Media Object Pattern.

* Masonry Layout Pattern groups the tweets and right hand content while providing a soft grey to cover the majority of the screen real-estate while providing a high-contrast white for the content.

Exercise
-----

As an exercise clone the repo at https://github.com/jrhicks/css-layout-patterns-example and update the CSS to produce:

<img width="100%" src="https://raw.githubusercontent.com/jrhicks/css-layout-patterns-example/master/img/finished.png" />
