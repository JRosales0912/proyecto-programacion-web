# In your Dockerfile.
FROM node:8.11.3
# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

# Build for production.
RUN npm i
RUN npm run build

# Install `serve` to run the application.
#RUN npm install -g serve

# Set the command to start the node server.
CMD npm start
#CMD npm serve -s build

# Tell Docker about the port we'll run on.
EXPOSE 3000