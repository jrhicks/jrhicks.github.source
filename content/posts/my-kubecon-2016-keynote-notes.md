---
title: My KubeCon 2016 Keynote Notes
slug: kubernetes-notes
summary: "Notes from Kelsey Hightower Presentation"
created: "August 19 2016"
author: Jeffrey R. Hicks
twitter: jrhicks
cover: false
type: post
---

# Requirements

* [Create a GCE Account](https://github.com/kelseyhightower/craft-kubernetes-workshop/blob/master/labs/create-gce-account.md)

* [Enable and Explore Google Cloud Shell](https://github.com/kelseyhightower/craft-kubernetes-workshop/blob/master/labs/enable-and-explore-cloud-shell.md)

# Hello NGINX

Kelsey Hightower has a great Introduction to Kubernetes in his [KubeCon Keynote Presentation](https://www.youtube.com/watch?v=Wyl4O3CHzV0) that uses command lines instead of YAML files.  Similar to this [User's Guide](http://kubernetes.io/docs/user-guide/simple-nginx/), the command line is less intimidating to new users than YAML files.

I've adapted it slightly to work on GCE.

```bash
kubectl run mynginx  \
  --image=nginx:1.9.12

kubectl expose deployment mynginx \
  --port 80 \
  --type=LoadBalancer

kubectl get svc
```
Paste EXTERNAL-IP address of my-nginx into browser.

# Hello Ghost

  * [Parts of Ghost](https://youtu.be/Wyl4O3CHzV0?t=6m44s)

    * nginx & ghost

    * mysql

  * [Scale nginx & ghost](https://youtu.be/Wyl4O3CHzV0?t=7m25s)

# Alone with Docker

 * Tightly coupled containers difficult to orchestrate

  * [Balance](https://youtu.be/Wyl4O3CHzV0?t=8m42s) - Need to have equal number of nginx and ghost.

  * [Container Networking](https://youtu.be/Wyl4O3CHzV0?t=8m10s) - Nginx and ghost need to connect without 'clever' [EntryPoint.sh work-arounds](https://youtu.be/Wyl4O3CHzV0?t=9m12s)

# Pods

Pods are a kubernetes primitive that represents a logical application.

* [Pods](https://youtu.be/Wyl4O3CHzV0?t=9m48s)

  * One or more containers and volumes

  * Shared Namespaces

  * One IP per Pod

  * [Better Balance](https://youtu.be/Wyl4O3CHzV0?t=7m25s)

  * [Networking on LocalHost](https://youtu.be/Wyl4O3CHzV0?t=10m28s)

# Deployments

Deployments drives current state towards desired state.

* [Declarative](https://youtu.be/Wyl4O3CHzV0?t=11m38s)

* Desired state stored on server

  * Ansible Tower

  * Puppet Enterprise

  * [Self Healing](https://youtu.be/Wyl4O3CHzV0?t=12m18s)

* Scheduler maintains state

  * AWS Auto-Scaling Group

  * GCE Instance Group Manager


## Secrets & Config Maps

Secrets keep passwords, sensitive config files, and
ssl certifies out of builds.

Kubernetes Approach

 * [Load secret into Kubernetes master](https://youtu.be/Wyl4O3CHzV0?t=13m9s)

 * [Consume secrets as mounted volumes or env variables](https://youtu.be/Wyl4O3CHzV0?t=14m35s)

```
kubectl create secret mysecretconfig \
  --from-file config.json

kubectl create secret mysecret database-yml \
  --from-literal=password=opensesame
```

### Consume secret as mounted volume

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
  namespace: myns
spec:
  containers:
  - name: mypod
    image: redis
    volumeMounts:
    - name: foo
      mountPath: "/etc/foo"
      readOnly: true
  volumes:
  - name: foo
    secret:
      secretName: mysecretconfig
```

### Consume secret as Env. Variables

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secret-env-pod
spec:
  containers:
    - name: mycontainer
      image: redis
      env:
        - name: SECRET_USERNAME
          valueFrom:
            secretKeyRef:
              name: mysecret
              key: username
        - name: SECRET_PASSWORD
          valueFrom:
            secretKeyRef:
              name: mysecret
              key: password
  restartPolicy: Never
```


# Resources

* [KubeCon Opening Keynote](https://clusterhq.com/2016/03/30/kubecon-keynote-kelsey-hightower/#transcript) - Transcript

* [KubeCon Opening Keynote](https://github.com/kelseyhightower/talks/tree/master/kubecon-eu-2016/demo) - Github Source

* [NGINX SSL Proxy](https://github.com/GoogleCloudPlatform/nginx-ssl-proxy)

* [Hello Node](http://kubernetes.io/docs/hellonode/)

* [Drone on Kubernetes](https://github.com/drone-demos/drone-on-kubernetes/tree/drone-0.5/gke-with-https)

* [TLS Ingress](http://kubernetes.io/docs/user-guide/ingress/#tls)

* [Get your ship together. Containers are here to stay](https://skillsmatter.com/skillscasts/7897-keynote-get-your-ship-together-containers-are-here-to-stay#showModal?modal-signup-complete)

# Jokes

* (when describing the problem of container connectivity) The whole startup-economy was built up around this, 100s were funded 3 survived.

* (when showing an entrypoint.sh) "Did you guise hear that ring?"  That was the 90s calling for their tooling back.

* (when discussing deployments) "Human Schedulers or have some".
Ask someone in operations to And when a server goes down, sleep deprivation kicks in.  We give them pagers, they wake up in the middle of the night.
