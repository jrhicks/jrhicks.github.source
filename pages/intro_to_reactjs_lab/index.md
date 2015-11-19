---
title: Intro to ReactJS - Lab
subtitle: ""
created: "Thu Nov 19 2015 17:12:40 GMT-0600 (CST)"
author: Jeffrey R. Hicks
theme: bs3
---

Lab Objectives
==============

* Quickly start fiddling with React

* Don't worry about build process

* Don't worry about backend

* Don't worry about ES6

Tutorial
===========

[Tutorial: Sample Mobile Application with React](http://coenraets.org/blog/2014/12/sample-mobile-application-with-react-and-cordova/) - Christophe Coenraets

![Example App](http://coenraets.org/blog/wp-content/uploads/2014/12/uimockscript.png)


index.html
```
<!DOCTYPE html>
<html>
<head>
    <title>Employee Directory</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>
    <script type="text/jsx" src="js/app.js"></script>
</head>

<body></body>

</html>
```

js/app.js
```
var Header = React.createClass({
    render: function () {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
});

var SearchBar = React.createClass({
    render: function () {
        return (
            <input type="search" />
        );
    }
});

var EmployeeList = React.createClass({
    render: function () {
        return (
            <ul>
                <li>Christophe Coenraets</li>
                <li>Lisa Jones</li>
            </ul>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header text="Employee Directory"/>
                <SearchBar />
                <EmployeeList />
            </div>
        );
    }
});

React.render(
    <HomePage />,
    document.body
);
```
