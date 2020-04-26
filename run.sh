#!/usr/bin/env bash

if [ "$1" = "rebuild" ]; then
    docker-compose build
fi

if [ "$1" = "ngssr" ]; then
    docker build --tag=ng-ssr -f ./Dockerfile .
fi

API_PORT=4040 APP_PORT=4200 docker-compose up -d ngssr
