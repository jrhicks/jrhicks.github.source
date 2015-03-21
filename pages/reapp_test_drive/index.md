---
title: Reapp Test Drive
subtitle: "Building a reapp.io app with Adobe Phonegap Build."
created: "Thu Mar 05 2015 17:45:21 GMT-0600 (CST)"
author: Jeffrey R. Hicks
theme: bs3
---

March 5, 2015

##Getting Started

I thought I would start by following the simple instructions on [Reapp.io](http://reapp.io)

* npm install -g reapp

* reapp new HelloWorldReapp

* cd HelloWorldReapp

* reapp build ios

This builds the html, js, and css assets needed for a phonegap/cordova hybrid app, but we need to create a base cordova app with the cordova CLI and copy the assets into the project.

* npm install -g phonegap

* cd build

* phonegap create phonegap

* rm -rf phonegap/www

* cp -R public phonegap/www

Then I created a public repository on GitHub at https://github.com/jrhicks/hello_world_reapp and pushed the phonegap directory into it.  From the same folder.

* cd phonegap

* git init

* git add README.md

* git commit -m "first commit"

* git remote add origin https://github.com/jrhicks/hello_world_reapp.git

* git push -u origin master
