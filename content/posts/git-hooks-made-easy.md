---
title: Git Hooks Made Shareable
slug: 'git-hooks-made-shareable'
summary: "Using githooks are great, but they can be a pain to share with your team."
created: "April 19 2017 20:14:25 GMT-0500 (CDT)"
author: Jeffrey R. Hicks
twitter: jrhicks
cover: true
type: post
---

Our team has used githooks for everything from promoting good habits like testing and linting to critical checks to ensure secrets aren't accidentally committed.  Unfortunately, since the hooks are stored inside the .git folder they aren't part of the shared repository and sharing updates has been a pain.

Recently I learned about [Husky](https://github.com/typicode/husky) which makes sharing git hooks super easy.  After installed, scripts can live in your repo and are configured in package.json.

```
npm install husky --save-dev
```

```
// Edit package.json
{
  "scripts": {
    "precommit": "npm test",
    "prepush": "npm test",
    "...": "..."
  }
}
```
```
git commit -m "Keep calm and commit"
```
