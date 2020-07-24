#!/bin/bash

read -p ">> do you wish to initiate swarm: ( Y/N ) " INITIATE_SWARM

# Switch to prod machine
eval $(docker-machine env hologram-mart)

# Build new image
docker build -t max2wms/hologram-mart-client .

if [ "${INITIATE_SWARM}" == "Y" ]
then
    # Initiate swarm
    npm run swarm:init:addr
fi

# Redeploy stack
npm run stop:swarm
sleep 20
npm run start:swarm

# Switch back to local machine
eval $(docker-machine env -u)