---
title: Ansible Notes
slug: ansible-notes
summary: "Personal notes for Ansible"
created: "April 09 2016"
author: Jeffrey R. Hicks
twitter: jrhicks
cover: true
type: post
---


Learning Ansible with Vagrant (Part 2/4)

* Watch https://sysadmincasts.com/episodes/45-learning-ansible-with-vagrant-part-2-4

```bash
wget https://d1cg27r99kkbpq.cloudfront.net/static/extra/e45-supporting-material.tar.gz

tar -xvf e45-supporting-material.tar.gz

cd e45-supporting-material

vagrant up

cd ~

ssh-keyscan lb web1 web2 >> .ssh/known_hosts

ssh-keygen -t rsa -b 2048

ansible-playbook e45-ssh-addkey.yml
```
