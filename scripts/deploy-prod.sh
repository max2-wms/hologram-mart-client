#!/bin/bash

DATE=(date -I)

# Building image
docker build -t max2wms/hologram-mart-client:$DATE --no-cache .
docker tag max2wms/hologram-mart-client:$DATE max2wms/hologram-mart-client:latest
docker tag max2wms/hologram-mart-client:$DATE max2wms/hologram-mart-client:lts

# Push image
docker push max2wms/hologram-mart-client:$DATE
docker push max2wms/hologram-mart-client:latest
docker push max2wms/hologram-mart-client:lts

# Redeploy stack
npm run stop:swarm
sleep 20
npm run start:swarm