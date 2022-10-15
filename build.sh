#!/bin/sh

find . -type d -name output -exec rm -rf {} +
mkdir -p .vercel/output/static/app-edge
mkdir -p .vercel/output/functions

pnpm run -r build

cp -r apps/app-edge/.vercel/output/functions/render.func .vercel/output/functions/app-edge.func
cp -r apps/app-edge/.vercel/output/static/_app .vercel/output/static/app-edge/_app

cp config.json .vercel/output/config.json

cp public/index.html .vercel/output/static/index.html