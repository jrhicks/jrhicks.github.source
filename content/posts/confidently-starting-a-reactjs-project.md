---
title: Confidently Starting A React Project
slug: confidently-starting-a-react-project
subtitle: "A case for building your own boilerplate"
created: "Wed Jan 06 2016 15:46:39 GMT-0600 (CST)"
author: Jeffrey R. Hicks
twitter: jrhicks
cover: true
type: post
---

2016 Javascript Fatigue Resolution
====

Eric Clemmons blew up twitter with a well timed proposal that the react community resolve to fix [Javascript Fatigue](http://tinyurl.com/zbahygs) in 2016.

> Ultimately, the problem is that by choosing React
> (and inherently JSX), you’ve unwittingly opted
> into a confusing nest of build tools, boilerplate,
> linters, & time-sinks to deal with before you ever
> get to create anything.

## Just Want to Play?

Powerful build tools yield amazing benefit but come have a learning curve.  If you just want to play with react and see how it feels before you buy into all the tooling then just use a tutorial that has VERY LITTLE TOOLING.  I recommend: [Sample React App in 7 Steps](http://coenraets.org/blog/2014/12/sample-mobile-application-with-react-and-cordova/) Do not be fooled by the Cordova reference.  This is a very-low-tooling tutorial that will have you playing quickly.

Also Pete Hunt has some tips on getting started with React and proposes a learning sequence: [React Howto](https://twitter.com/floydophone/status/684109201665208321)

## Want to get Serious?

Once your ready to get serious you might be lured into downloading a professional boilerplate.  I DO NOT recommend this!  Other people's setup are difficult to troubleshoot and terrifying to adapt to your needs.  Once you spend an afternoon following a good guide to setup your own boilerplate you will have the confidence you need to extend and troubleshoot.  Here are some good guides.

* [Clear, Concise Guide](https://github.com/soulmachine/react-starter-kits)

* [Survive.js](http://survivejs.com/webpack_react/webpack_and_react/) - Great (free) book on React and Webpack.

* [Boilerplate Search Engine](http://andrewhfarmer.com/starter-project/) - Use boilerplates only to see examples of how folks got stuff working.  I do not recommend downloading and using without a good understanding of setting up your own.

Style Guide
=======

I like the AirBNB style: [Airbnb Style Guides](https://github.com/airbnb/javascript/tree/master/react) - the linter is also quite handy.

```
import React, { PropTypes } from 'react';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

class Link extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
```

Install:

    npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-react

Add `.eslintrc`:

```json
{
  "env": {
    "node": true
  },
  "ecmaFeatures": {
    "jsx": true
  },
  "globals": {
    "React": true
  },
  "plugins": [
    "react"
  ],
  "extends": "airbnb",
  "rules": {
    "comma-dangle": 0,
    "no-console": 0,
    "id-length": 0,
    "react/prop-types": 0
  }
}
```

Add `.eslintignore`:

    build/**
    node_modules/**
    **/*.css
    **/*.html

Add a subcommand `lint` to the `scripts` field of `package.json`:

    "lint": "eslint 'src/**/*.@(js|jsx)'",

Run `npm run lint` to lint all source code.

Add eslint to git pre-commit hook, this way you will never commit in code that doesn't pass a check.

    npm install --save-dev precommit-hook

In addition to the `precommit-hook` package, this command will also

+ adds two files `.jshintrc` and `.jshintignore` to current project
+ adds a `pre-commit` field to `package.json`
+ adds two subcommands `lint` and `validate` to the `scripts` field if none exist

The `lint` subcommand in `scripts` uses `eslint` instead of `jshint`, which means this starter kit doesn't use jshint at all, and this is true.

Since eslint supports ES6 while jshint only has partial support for ES6, the obvious choice is eslint.

Delete two files `.jshintrc` and `.jshintignore`:

    rm .jshint*

Reference:

+ [soulmachine/react-starter-kits](https://github.com/soulmachine/react-starter-kits/blob/master/README.md)

+ [ruanyf/react-babel-webpack-boilerplate](https://github.com/ruanyf/react-babel-webpack-boilerplate)


+ [5-step quick start guide to ESLint](http://codeutopia.net/docs/eslint/)
+ [A Comparison of JavaScript Linting Tools](http://www.sitepoint.com/comparison-javascript-linting-tools/)
+ [ruanyf/react-babel-webpack-boilerplate](https://github.com/ruanyf/react-babel-webpack-boilerplate)
+ [ruanyf/webpack-demos](https://github.com/ruanyf/webpack-demos)
+ [petehunt/webpack-howto](https://github.com/petehunt/webpack-howto)

##Folder Structure

Folder structure and application navigation and routing to me seem to be an important connection, so I asked the guy who wrote react-router and who has a lot of experience with Ember (where all these front-ends got their router inspiration).

@jrhicks: do you still recommend a react-app-file-structure like https://gist.github.com/ryanflorence/110d4538bf98694538de

@ryanflorence: absolutely, check out the &quot;huge-apps&quot; example in react router: https://github.com/rackt/react-router/tree/master/examples/huge-apps

**Views are a nested set of routes and components.**

1.  make it clear which components are reused, and which are only used in one view

2.  If a module is shared among child views, it moves into the parent's component folder. It might make its way all the way to the root component folder.

3.  Its just a big recursive structure because that's what an app is. Let's embrace it in our file system.

#### Example Huge App

The following App is from an example that ships with React Router.  This example application managers courses.  In this screenshot the user has navigated into the first course "React React Fundamentals" and is viewing the details of the first assignment "build a router".

* App has a global navigation

* A course and its nested elements share sub navigation "Announcements, Assignments, Grades"

* Assignments follow a master-detail pattern.  And the assignments sidebar is shared.

<img src="/assets/images/huge_app.png" style="border: 2px solid black;" />

#### Components - Routes - Indexes

Views are composed of components, routes, and indexes.

```
.
├── actions
├── stores
└── views
		├── components
		├── routes
		└── index.js
```

Routes contain sub-views as shown below.  Not shown below is that each subview is itself the same arrangement of components, routes, and indexes.

```
.
├── actions
├── stores
└── views
		├── components
		├── routes
		│		├── Calendar
		│		├── Course
		│		├── Grades		
		│		├── Messages				
		│		└── Profile
		└── index.js
```

The index ties together the components and sub-views into a data structure that react-router can easily consume.

./views/index.js
```
export default {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile')
    ]
  }
```

At the root of the application we have Global Navigation and a padded canvas where for the currently routed nested children.  If the user hasn't navigated to a nested child, we default to render the Dashboard.

.views/components/App.js
```
/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

const App = React.createClass({
  render() {
    return (
      <div>
        <GlobalNav />
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard courses={COURSES} />}
        </div>
      </div>
    )
  }
})

export default App
```

Review the components along the nested route:

<img src="/assets/images/huge_app.png" style="border: 2px solid black;" />

* Course -> Announcements -> Announcement

```
.
├── actions
├── stores
├── views
│   ├── components
│   │   ├── App.js
│   │   ├── Dashboard.js
│   │   └── GlobalNav.js
│   ├── routes
│   │   └── Course
│   │       ├── components
│   │       │   ├── Course.js
│   │       │   ├── Dashboard.js
│   │       │   └── Nav.js
│   │       ├── routes
│   │       │   ├── Announcements
│   │       │   │   ├── components
│   │       │   │   │   ├── Announcements.js
│   │       │   │   │   └── Sidebar.js
│   │       │   │   ├── routes
│   │       │   │   │   └── Announcement
│   │       │   │   │       ├── components
│   │       │   │   │       │   └── Announcement.js
│   │       │   │   │       └── index.js
│   │       │   │   │   
│   │       │   │   └── index.js
│   │       │   ├── Assignments
│   │       │   └── Grades
│   │       └── index.js
│   └── index.js
├── app.js
└── index.html
```

Our application is just a div and the root index.js of the views.

./app.js
```
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

const rootRoute = {
  component: 'div',
  childRoutes: require('./views/index.js')
}

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('app')
)
```

./views/index.js
```
export default {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile')
    ]
  } ]
}
```



./views/routes/Course/index.js
```
export default {
  path: 'course/:courseId',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/Announcements'),
        require('./routes/Assignments'),
        require('./routes/Grades')
      ])
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Course'))
    })
  }
}
```

./components/Course.js
```

/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import Nav from './Nav'

const styles = {}

styles.sidebar = {
  ...
}

const Contacts = React.createClass({
  render() {
    let { sidebar, main, children, params } = this.props
    let course = COURSES[params.courseId]

    let content
    if (sidebar && main) {
      content = (
        <div>
          <div className="Sidebar" style={styles.sidebar}>
            {sidebar}
          </div>
          <div className="Main" style={{ padding: 20 }}>
            {main}
          </div>
        </div>
      )
    } else if (children) {
      content = children
    } else {
      content = <Dashboard />
    }

    return (
      <div>
        <h2>{course.name}</h2>
        <Nav course={course} />
        {content}
      </div>
    )
  }
})

export default Course;
```

## CSS Frameworks

Many CSS frameworks like Bootstrap and certain Material Design implementations have javascript that will fight your React.  If you love Material Design please check out:

* [React Toolbox](http://react-toolbox.com/#/) - Material Design Component Library

If your writing applications for business users and want that enterprise/non-consumer feel I highly recommend Lightning Design Systems.

* [react-lightning-design-system](https://github.com/stomita/react-lightning-design-system)

* [React University](http://coenraets.org/blog/2015/10/react-university-sample-app-react-node-js-4-lightning-design-system/) - Sample Application with React, Node.js 4, and the Lightning Design System

* [Real Estate Sample](https://github.com/ccoenraets/lightning-react-app) - Sample Application using Lightning Design Systems and React

Bootstrap does have React Bootstrap, but I'm not keen on waiting for a React team to re-work a system built with JQuery.  Basically I would always be about 5 months behind Bootstrap, which is already becoming bloated and slow to evolve (as it must please too many people and be too general).
