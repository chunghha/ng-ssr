ARG NODE_VERSION=12

FROM keymetrics/pm2:${NODE_VERSION}-alpine AS builder

# set api/app port from env var
ENV API_PORT $API_PORT
ENV APP_PORT $APP_PORT

# Create own app folder
RUN mkdir -p /app
WORKDIR /app

# Install the dependencies
ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json .
COPY yarn.lock .
RUN yarn

# Build the APP
COPY angular.json .
COPY .browserslistrc .
COPY server.ts .
COPY tsconfig.json .
COPY tsconfig.app.json .
COPY tsconfig.base.json .
COPY tsconfig.server.json .
COPY server server/
COPY src src/
RUN yarn build:ssr

# Expose the API/APP port
EXPOSE $API_PORT
EXPOSE $APP_PORT

# Run the APP with pm2
COPY ecosystem.config.js .
ENTRYPOINT [ "pm2-runtime" ]
CMD [ "start", "ecosystem.config.js" ]
