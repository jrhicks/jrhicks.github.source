---
title: 2016 Devops Review
slug: node-deployment
summary: "Personal notes for reviewing devops"
created: "April 07 2016"
author: Jeffrey R. Hicks
twitter: jrhicks
cover: true
type: post
---

Configuration Management & Deployment
------------------------------

* [Ansible](https://www.ansible.com)

 * [ThoughtWorks Adopt Blip](https://www.thoughtworks.com/radar/tools/ansible)

 * [Rolling Deployments with Ansible](https://sysadmincasts.com/episodes/47-zero-downtime-deployments-with-ansible-part-4-4) - Wow!

 * [Use Ansible To Setup Node.js Application](http://slash4.net/blog/deployment-automation/howto-use-ansible-to-setup-a-nodejs-gaming-application.html)

 * [Ansible Vault](http://docs.ansible.com/ansible/playbooks_vault.html)

 * [Ansible with HashiCorp Vault](https://github.com/jhaals/ansible-vault)

 * [Ansible Best Practices](http://docs.ansible.com/ansible/playbooks_best_practices.html)

 * [How Twitter Uses Ansible](https://www.youtube.com/watch?v=fwGrKXzocg4)

* [Capistrano](http://capistranorb.com/)

 * [Ryan Bates railscasts on Capistrano Tasks](http://railscasts.com/episodes/133-capistrano-tasks)

 * [Standalone Puppet with Capistrano](https://spin.atomicobject.com/2012/07/26/standalone-puppet-with-capistrano/)

 * [Ship-it](https://github.com/shipitjs/shipit) - Node.js Capistrano Clone

* [Puppet](https://puppet.com/)

  * [What is Puppet?](https://vimeo.com/60768300)

  * [eLearning Catalog](https://learn.puppet.com/catalog)

  * [ThoughtWorks Trial Blip](https://www.thoughtworks.com/radar/tools/puppet)

* [HashiCorp](https://www.hashicorp.com/)

  * [Intro to Nomad and Otto](https://www.youtube.com/watch?v=aF_HPTHtqCA)

  * [Terraform](https://www.terraform.io/intro/use-cases.html)

    * [ThoughtWorks Assess Blip](https://www.thoughtworks.com/radar/tools/terraform)

  * [HashiCorp Vault](https://www.vaultproject.io/) - Secret key management

    * [ThoughtWorks Assess Blip](https://www.thoughtworks.com/radar/tools/hashicorp-vault)

  * [Otto](https://www.ottoproject.io/)

  * [Consul](https://www.consul.io/)

   * [ThoughtWorks Adopt Blip](https://www.thoughtworks.com/radar/tools/consul)

* [Salt](http://saltstack.com/)

* [Chef](https://puppet.com/)


Continuous Integrations
-----------------------

* [Practices and Benefits](http://www.martinfowler.com/articles/continuousIntegration.html)

* [Travis CI](https://travis-ci.org/) - $129/month 2 concurrent builds

* [Snap CI](https://www.snap-ci.com/) - $30/month 1 concurrent build

* [Strider.CD](https://github.com/Strider-CD) - Node.js open source

* [Jenkins](https://jenkins.io/) - Free

* [Bamboo](https://www.atlassian.com/software/bamboo)

* [Concourse CI](http://concourse.ci/)

  * [ThoughtWorks CI Assess](https://www.thoughtworks.com/radar/tools/concourse-ci)

  * [CI That Scales with your Project](https://www.youtube.com/watch?v=mYTn3qBxPhQ)

* [Go.CD](https://www.go.cd/)

* [Drone.io](https://drone.io/) - $25/month for 5 private repos


Monitoring, Security
------------------------

* [LoadImpact](https://loadimpact.com/)

* [ServerSpec](http://serverspec.org/) - Configuration verification

* [upguard](https://www.upguard.com/) - Configuration & threat monitoring

* [Lets Encrypt](https://letsencrypt.org/) - Free SSL Certificates?

* [PM2](http://pm2.keymetrics.io/) - Production process manager

* [Prometheus](http://prometheus.io/) - Monitor server load

* [Sysdig](http://www.sysdig.org/) - Universal System Visibility
With Native Container Support

* [OWASP Dependency Check](https://www.owasp.org/index.php/OWASP_Dependency_Check) - Scan source code dependencies for known vulnerabilities

* [Gitrob](https://github.com/michenriksen/gitrob) - Scan source code for secret key leaks


Containerization
------------------------

* [Introduction to Docker](https://sysadmincasts.com/episodes/31-introduction-to-docker)

* [Docker](https://www.docker.com/)

* [Mesos](http://mesos.apache.org/)

* [Kubernetes](http://kubernetes.io/)

* [GetCarina](https://getcarina.com/)


Books, Conferences & Overviews
------------------------------

* [Infrastructure as Code](http://shop.oreilly.com/product/0636920039297.do) - O'Reilly Book

   * [Operability.io Talk](https://www.youtube.com/watch?v=a4PuAkI7uGg&index=6&list=PLK4VB0cauli7-_RIvpmn651ePtddw9_Fp)

* [ThoughtWorks Tech Radar](https://www.thoughtworks.com/radar/tools)

* [stackshare server configuration and automation](http://stackshare.io/server-configuration-and-automation)

* [Continuous Delivery Book](http://www.amazon.com/gp/product/0321601912)

* [2016 Devops Conferences](http://devopsconferences.org/regions/usa-canada)

* [Devops](https://en.wikipedia.org/wiki/DevOps) - Wikipedia

* [Sysadmin Casts](https://sysadmincasts.com/episodes/)

Configuration Guides
------------------------

* [7 CM Tools you need to know about](https://www.upguard.com/articles/the-7-configuration-management-tools-you-need-to-know)

* [How to deploy your node app on Linux, 2016 edition](https://certsimple.com/blog/deploy-node-on-linux)

* [How To Set Up a Node.js Application for Production on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04)
