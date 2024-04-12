#!/usr/bin/env sh
. ./bin/_.sh

npx concurrently "npx env-cmd -f ./env/$env.env react-scripts start" "nodemon src/api/index.js"
