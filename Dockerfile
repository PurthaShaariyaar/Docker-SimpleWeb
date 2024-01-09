# Specify a base image
FROM node:14-alpine

# Install configurations and dependencies
COPY ./ ./
RUN npm install

# Specify a command to run when the container starts up
CMD ["npm", "start"]
