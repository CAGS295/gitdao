# Container image that runs your code
FROM node:21-alpine

# build dist
COPY aragonsdkscripts /aragonsdkscripts
WORKDIR /aragonsdkscripts
RUN npm install && npm run build

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
