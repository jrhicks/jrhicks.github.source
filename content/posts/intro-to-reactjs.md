---
title: Intro to ReactJS - Lab
slug: intro-to-reactjs
summary: "Notes for a Meetup Presentation"
created: "Thu Nov 19 2015 17:12:40 GMT-0600 (CST)"
author: Jeffrey R. Hicks
type: post
cover: true
twitter: jrhicks
---

Lab Objectives
==============

* Build an employee's directory

* No build process

* No backend

* No ES6 or ES7

Basic Example 1
========

* Create index.html

```
<!DOCTYPE html>
<html>
<head>
    <title>Employee Directory</title>
</head>

<body></body>

</html>
```

* Add react libraries.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>
```

* Add Hello World Code.

```
    <script type="text/jsx">
      React.render(
          <h1>Hello React</h1>,
          document.body
      );
    </script>
```

Basic Example 2
===========

* Create js/app.js and move javascript code into it.

* In index.html replace script with reference to file.

```
<script type="text/jsx" src="js/app.js"></script>
```

* Install some kinda of simple web server.

  * npm install http-server
  * /node_modules/http-server/bin/http-server


* Alternatively you can install http-server globally

  * npm install http-server -g

  * http-server

* Open Browser: http://127.0.0.1:8080/



Tutorial
===========

* [Tutorial: Sample Mobile Application with React](http://coenraets.org/blog/2014/12/sample-mobile-application-with-react-and-cordova/) - Christophe Coenraets

* No templates: Components

* Thinking in React

![Example App](http://coenraets.org/blog/wp-content/uploads/2014/12/uimockscript.png)

* Home Page

 * Header

 * Search Bar

 * Employee List

js/app.js
```
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
```

* lowercase: native html

* capitalized: our components

* Header

```
var Header = React.createClass({
    render: function () {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
});
```

* SearchBar

```
var SearchBar = React.createClass({
    render: function () {
        return (
            <input type="search" />
        );
    }
});
```

* EmployeeList has subcomponents, but lets just keep it simple for now

```
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
```


* Replace Hello World with HomePage

```
React.render(
    <HomePage />,
    document.body
);
```

Dataflow
=====

* Lets add some data.  Put this in HomePage component, right in the render function.

```
var employees = [
  {id: 1, firstName: 'Jeffrey', lastName: 'Hicks'},
  {id: 2, firstName: 'Jeff', lastName: 'Fendley'},
  {id: 3, firstName: 'Heather', lastName: 'Brown'},
  {id: 4, firstName: 'Anton', lastName: 'Avguchenko'},
  {id: 5, firstName: 'Brady', lastName: 'Davis'}
];
```
* Now pass the employees to the EmployeeList component.

```
<EmployeeList employees={employees}/>
```

* Now lets fix the Employee List Component

```
var EmployeeList = React.createClass({
    render: function () {
        var items = this.props.employees.map(function (employee) {
            return (
                <EmployeeListItem key={employee.id} employee={employee} />
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});
```

* Lets create an EmployeeListItem component

```
var EmployeeListItem = React.createClass({
    render: function () {
        return (
            <li>
                <a href={"#employees/" + this.props.employee.id}>
                    {this.props.employee.firstName} {this.props.employee.lastName}
                </a>
            </li>
        );
    }
});
```

* Lets tweak EmployeeList

```
var EmployeeList = React.createClass({
    render: function () {
        return (
            <ul>
                {this.props.employees.map(function (employee) {
                    return (
                        <EmployeeListItem key={employee.id} employee={employee} />
                    );
                })}
            </ul>
        );
    }
});
```

Inverse Data Flow
========

* Add a searchHandler to our HomePage component

```
searchHandler:function(key) {
    alert('Search key: ' + key);
},
```

* And pass it as a property to our SearchBar

```
<SearchBar searchHandler={this.searchHandler}/>
```

* Lifecycle methods are invoked at specific times

  * render is a lifecycle method

  * getInitialState: Invoked once before the component is mounted. The return value will be used as the initial value of this.state.

* Lets add some *State* to our SearchBar

```
var SearchBar = React.createClass({
    getInitialState: function() {
        return {searchKey: ""};
    },

    render: function () {
        return (
            <input type="search" value={this.state.symbol} />
        );
    }
});
```

* Define our components searchHandler

```
searchHandler: function(event) {
    var searchKey = event.target.value;
    this.setState({searchKey: searchKey});
    this.props.searchHandler(searchKey);
},
```

* Have the input call our SearchBar's searchHandler

```
onChange={this.searchHandler}
```


Async Data
=========

js/data.js
* wget https://raw.githubusercontent.com/ccoenraets/react-employee-directory/master/iteration4/js/data.js

index.html
```
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="js/data.js"></script>
```

js/app.js
```
React.render(
    <HomePage service={employeeService}/>,
    document.body
);
```

* Remove static list of employees and add state

```
var HomePage = React.createClass({
    getInitialState: function() {
        return {employees: []}
    },

    render: function () {
        return (
            <div>
                <Header text="Employee Directory"/>
                <SearchBar searchHandler={this.searchHandler}/>
                <EmployeeList employees={this.state.employees}/>
            </div>
        );
    }
});
```

* Lets replace the search handler with something that sets the state
using our employeeService

```
searchHandler:function(key) {
    this.props.service.findByName(key).done(function(result) {
        this.setState({searchKey: key, employees: result});
    }.bind(this));
},
```

Routing
======

* Some really cool routing inspired by Ember.js with sub-routes.

* Lets just keep it simple

* wget https://raw.githubusercontent.com/ccoenraets/react-employee-directory/master/iteration5/js/router.js

```
<script src="js/router.js"></script>
```

```
router.addRoute('', function() {
    React.render(
        <HomePage service={employeeService}/>,
        document.body
    );
});

router.addRoute('employees/:id', function(id) {
    React.render(
        <EmployeePage employeeId={id} service={employeeService}/>,
        document.body
    );
});

router.start();
```

* Lets add the EmployeePage

* componentDidMount: Invoked once immediately after the initial rendering occurs.

```
var EmployeePage = React.createClass({
    getInitialState: function() {
        return {employee: {}};
    },

    render: function () {
        return (
            <div>
                <Header text="Employee Details"/>
                <h3>{this.state.employee.firstName} {this.state.employee.lastName}</h3>
                {this.state.employee.title}
            </div>
        );
    }
});
```

* We need to convert the employee id passed in as a prop by the router to fetch an employee

* componentDidMount: Invoked once immediately after the initial rendering occurs.

```
componentDidMount: function() {
    this.props.service.findById(this.props.employeeId).done(function(result) {
        this.setState({employee: result});
    }.bind(this));
},
```

Styling
==========

* Meet Ratchet - http://goratchet.com/getting-started/

* Instead of downloading all the assets, lets just clone a repo I have setup with the front end assets, but not linked in to the code.

* git clone https://github.com/jrhicks/lr_meetup_11202015.git

* cd lr_meetup_11202015

* http-server

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
<link href="ratchet/css/ratchet.css" rel="stylesheet" type="text/css">
<link href="css/styles.css" rel="stylesheet" type="text/css">
```

* Update Header

```
<header className="bar bar-nav">
    <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
    <h1 className="title">{this.props.text}</h1>
</header>
```

* Update SearchBar

```
<div className="bar bar-standard bar-header-secondary">
    <input type="search" value={this.state.symbol} onChange={this.searchHandler}/>
</div>
```

* Update EmployeeListItem

```
<li className="table-view-cell media">
    <a href={"#employees/" + this.props.employee.id}>
        <img className="media-object small pull-left" src={"pics/" + this.props.employee.firstName + "_" + this.props.employee.lastName + ".jpg" }/>
        {this.props.employee.firstName} {this.props.employee.lastName}
        <p>{this.props.employee.title}</p>
    </a>
</li>
```

* Add class to EmployeeList

```
<ul  className="table-view">
```

* Add some class to the HomePage

```
<div className="content">
  <EmployeeList employees={this.state.employees}/>
</div>
```

* Style Up the EmployeePage

```
<div>
             <Header text="Employee" back="true"/>
             <div className="card">
                 <ul className="table-view">
                     <li className="table-view-cell media">
                         <img className="media-object big pull-left" src={"pics/" + this.state.employee.firstName + "_" + this.state.employee.lastName + ".jpg" }/>
                         <h1>{this.state.employee.firstName} {this.state.employee.lastName}</h1>
                         <p>{this.state.employee.title}</p>
                     </li>
                     <li className="table-view-cell media">
                         <a href={"tel:" + this.state.employee.officePhone} className="push-right">
                             <span className="media-object pull-left icon icon-call"></span>
                             <div className="media-body">
                             Call Office
                                 <p>{this.state.employee.officePhone}</p>
                             </div>
                         </a>
                     </li>
                     <li className="table-view-cell media">
                         <a href={"tel:" + this.state.employee.mobilePhone} className="push-right">
                             <span className="media-object pull-left icon icon-call"></span>
                             <div className="media-body">
                             Call Mobile
                                 <p>{this.state.employee.mobilePhone}</p>
                             </div>
                         </a>
                     </li>
                     <li className="table-view-cell media">
                         <a href={"sms:" + this.state.employee.mobilePhone} className="push-right">
                             <span className="media-object pull-left icon icon-sms"></span>
                             <div className="media-body">
                             SMS
                                 <p>{this.state.employee.mobilePhone}</p>
                             </div>
                         </a>
                     </li>
                     <li className="table-view-cell media">
                         <a href={"mailto:" + this.state.employee.email} className="push-right">
                             <span className="media-object pull-left icon icon-email"></span>
                             <div className="media-body">
                             Email
                                 <p>{this.state.employee.email}</p>
                             </div>
                         </a>
                     </li>
                 </ul>
             </div>
         </div>
```

Other Great React Presentations
====

* ES6 & ES7 - https://www.youtube.com/watch?v=DqMFX91ToLw

* Flux - https://facebook.github.io/react/docs/flux-overview.html

* Build Processes - https://webpack.github.io/

* Drag-n-Drop - http://gaearon.github.io/react-dnd/examples-chessboard-tutorial-app.html

  * https://www.youtube.com/watch?v=HuaaEKpNEOU

* Offline Data & Replication - https://www.youtube.com/watch?v=cuN3tyuMED8
