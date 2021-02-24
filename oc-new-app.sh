#!/bin/bash

#source /usr/local/etc/ocp4.config

oc new-app  --as-deployment-config --name todo --template angel-template/todo \
    -p APP_GIT_URL=https://github.com/amontero0611/DO288-apps \
    -p HOSTNAME=angel.amontero-69d72f28f989833c5b8f01c2069d04d1-0000.eu-de.containers.appdomain.cloud \
    -p NPM_PROXY=https://registry.npmjs.org \
    -p PASSWORD=mypass \
    -p CLEAN_DATABASE=true \
    # ADD MISSING PARAMETERS AND CHANGE PARAMETER VALUES IF NEEDED
