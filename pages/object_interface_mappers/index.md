---
title: React Form Generation
subtitle: "Object Interface Mappers (tcomb, json-schema etc.)"
created: "Mon Mar 30 2015 09:19:12 GMT-0500 (CDT)"
author: Jeffrey R. Hicks
theme: bs3
---

#Introduction

Here are two competing data definition
libraries and the form generation components that accompany them:

<table border=1 cellpadding="10">
<thead>
<tr>
<th style="padding: 15px">Standard</th>
<th style="padding: 15px">Form Component</th>
<th style="padding: 15px">validation</th>
<th style="padding: 15px">presentation customization</th>
<th style="padding: 15px">demo</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 15px">json-schema</td>
<td style="padding: 15px">plexus-form</td>
<td style="padding: 15px">plexus-validate</td>
<td style="padding: 15px">with classes</td>
<td  style="padding: 15px"><a href="http://appliedmathematicsanu.github.io/plexus-form/">demo</a></td>
</tr>
<tr>
<td style="padding: 15px">tcomb</td>
<td style="padding: 15px">tcomb-form</td>
<td style="padding: 15px">tcomb-validate</td>
<td style="padding: 15px">layout and style</td>
<td style="padding: 15px"><a href="http://gcanti.github.io/tcomb-form/demo/index.html">demo</a></td>
</tr>
</tbody>
</table>


#JSON Schema

```js
{
	"title": "Example schema",
	"type": "object",
	"properties": {
		"id": {"type": "integer"},
		"authorId": {"type": "integer"},
		"message": {"type": "string"}
	},
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
