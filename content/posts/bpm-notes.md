---
title: BPM Notes
slug: bpm-notes
summary: "Business Process Modeling Notes"
created: "Sat Mar 14 2015 13:22:14 GMT-0500 (CDT)"
author: Jeffrey R. Hicks
twitter: jrhicks
cover: false
type: post
---

## Overview

Setup Spring Mavern Project

* Setup a Java Project for BPMN 2.0

  *  Download Eclipse https://www.eclipse.org/downloads/

  * Install Java http://www.oracle.com/technetwork/java/javase/downloads/index.html

  * Using Shared Process Engine https://docs.camunda.org/get-started/spring/shared-process-engine/

  * Set Build Path http://screencast.com/t/TnNS9MbS0FAK

  *  Setting up a Maven project https://docs.camunda.org/get-started/bpmn20/project-setup/

  *  Spring Project Setup https://docs.camunda.org/get-started/spring/project-setup/

1.  Tomcat


* From Docker add /usr/local/tomcat/conf/tomcat-users.xml then test access at http://localhost:8888/manager/html




2.  Setting Up Camunda for Basic HTTP authentication

* [embedded-spring-rest](https://github.com/camunda/camunda-bpm-examples/tree/master/deployment/embedded-spring-rest)


* docker exec -i -t camundaui_camunda_1 /bin/bash

* docker exec -i -t hungry_hodgkin /bin/bash

* Creating a docker image with basic authentication

 https://docs.camunda.org/manual/7.4/reference/rest/overview/authentication/

* https://github.com/camunda/camunda-bpm-platform

* Attach and inspect

```
docker run -it -d camunda/camunda-bpm-platform:tomcat-7.6.0-alpha5 /bin/bash
docker run -it -d camundaui_camunda_1 /bin/bash
```

Test URL
* http://demo:demo@localhost:8080/camunda/api/engine/engine/default/user/demo/profile

## API Examples

* http://localhost:8080/camunda/api/engine/engine/default/user/demo/profile


## Camunda & Docker

* https://github.com/camunda/docker-camunda-bpm-platform

* http://localhost:8080/camunda-welcome/index.html

## Business Case

* [Performing Gap Analysis, Estimating Value, Projecting ROI]"http://www.oracle.com/us/corporate/insight/business-case-bpm-wp-171710.pdf"

## UX

* "Page Flow -vs- Process Flow, UI Mediator Pattern"[http://www.bpm-guide.de/2012/04/04/pageflow-vs-process-flow-and-ui-mediator-pattern/]
