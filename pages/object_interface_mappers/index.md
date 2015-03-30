---
title: Object Interface Mappers
subtitle: "Runtime Model Reflection For Concise UI Declaration and Validation"
created: "Mon Mar 30 2015 09:19:12 GMT-0500 (CDT)"
author: Jeffrey R. Hicks
theme: bs3
---

#Reflection Lost

Server side HTML rendering in Rails is easy and concise because Rails offers HTML helpers **reflection on
the data schema and routes**.  

This **reflection powers** the concise Rails HTML Helpers: simple_form and link_to

```erb
<%= simple_form_for @user do |f| %>
  <%= f.input :username %>
  <%= f.input :password %>
  <%= f.button :submit %>
<% end %>
```

```erb
<%= link_to @user%>
```

We lose this ability to reflect on the db schema and routes from the front-end.  How can we get that back?  

#Introducing OIMs

OIMS or (object interface mappers) provide the meta data to build interface components for our
objects.

[OIMs with Richard Kennard, Geraint Luff, and David Luecke](http://devchat.tv/js-jabber/150-jsj-oims) - Javascript Jabber 72 Minutes

#JSON Schema

JSON Schema

* describes your existing data format

* clear, human- and machine-readable documentation

* complete structural validation, useful for

JSON Hyper-Schema

* describes your existing API - no new structures required

* links (including URI Templates for target URIs)

* forms - specify a JSON Schema for the desired data

```js
{
	"title": "Example schema",
	"type": "object",
	"properties": {
		"id": {"type": "integer"},
		"authorId": {"type": "integer"},
		"message": {"type": "string"}
	},
	"links": [
		{"rel": "self", "href": "/posts/{id}"},
		{"rel": "author", "href": "/users/{authorId}"}
	]
}
```

##Plexus-form

React component that take JSON Schemas

[Plexus-form](https://github.com/AppliedMathematicsANU/plexus-form)

```js
<Form
   buttons  = {[]}
   schema   = {schema}
   validate = {validate}
   onSubmit = {onSubmit}
   handlers = {handlers}
   submitOnChange = {true} />
```

#TCOMB

[TCOMB Github](https://github.com/gcanti/tcomb) - Type Checking for Javascript


```js
var Person = t.struct({
  name: t.Str,              // a required string
  surname: t.maybe(t.Str),  // an optional string
  age: t.Num,               // a required number
  rememberMe: t.Bool        // a boolean
});
```

## TCOMB vs JSON Schema

TCOMB expresses more with less code.

```js
// JSON SCHEMA

{
  "type": "object",
  "properties": {
    "foo": {
      "type": "number"
    },
    "bar": {
      "type": "string",
      "enum": [
        "a",
        "b",
        "c"
      ]
    }
  }
}
```

```js
// TCOMB

var Schema = struct({
  foo: Num,
  bar: enums.of('a b c')
});
```

##TCOMB Validation

[tcomb-validation](https://github.com/gcanti/tcomb-validation) - Validation library based on type combinators

```js
var SignInInfo = struct({
  username: Str,
  password: Str
});

// retrieves values from the UI
var formValues = {
  username: $('#username').val().trim() || null,
  password: $('#password').val().trim() || null
};

// if formValues = {username: null, password: 'password'}
var result = validate(formValues, SignInInfo);
result.isValid();     // => false
result.firstError();  // => 'username is `null`, should be a `Str`'
```

## TCOMB Form

React.js powered UI library for developing forms writing less code.

* [Awesome Demos](http://gcanti.github.io/tcomb-form/demo/index.html) - Bootstrap, Gridforms, and Ionic

* [Docs](http://gcanti.github.io/tcomb-form/guide/index.html)

* [tcomb-form](https://github.com/gcanti/tcomb-form) - React.js powered form-handling

## TCOMB Form Native

* [tcomb-form-native](https://github.com/gcanti/tcomb-form-native) - react-native powered form-handling
