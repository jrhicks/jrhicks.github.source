---
title: Customize Reapp-pack
subtitle: ""
created: "Sat Mar 07 2015 11:50:29 GMT-0600 (CST)"
author: Jeffrey R. Hicks
theme: bs3
---

Checkout Reapp CLI and Reapp-Pack package from source.  Link the local reapp-pack to the local Reapp CLI, and then

```bash
git clone https://github.com/reapp/reapp.git

git clone https://github.com/reapp/reapp-pack.git

cd reapp-pack

npm link

cd ../reapp

npm link reapp-pack

cd /myproject

npm link reapp

```

Create the file config\run.config.js

```javascript
module.exports = {
  entry: './app/app.js',
  devtool: 'eval',
  target: 'web',
  linkModules: true,
  hot: true,
  server: true,
  port: 3011,
  debug: true
};'localhost'
```

Done!  Subsequent calls to reapp run will use your locally installed reapp-pack and your locally configured run.config.js :)  Use -d to debug

```
reapp run -d
```
If your on vagrant (like me) ... you may want to run:

```
reapp run -d -h 0.0.0.0
```

Merge in official repo changes

```bash
git remote add official https://github.com/reapp/reapp.git
git fetch official
git merge official/master
```
