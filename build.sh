#!/bin/sh

# Script to deploy all the apps in a single Vercel project under different urls
# using Vercel Build Output API (https://vercel.com/docs/build-output-api/v3)

# Clean
find . -type d -name output -exec rm -rf {} +
mkdir -p .vercel/output/functions

# Build
pnpm run -r build

# Move bundles in Vercel output folder
for appName in $(ls ./apps)
do
    mkdir -p .vercel/output/static/$appName
    cp -r apps/$appName/.vercel/output/functions/render.func .vercel/output/functions/$appName.func
    cp -r apps/$appName/.vercel/output/static/_app .vercel/output/static/$appName/_app
done

# For the SPA demo and the slides, the build output is different (dist folder)
cp -r apps/app-history-spa/dist/* .vercel/output/static/app-history-spa

mkdir -p .vercel/output/static/slides
cp -r slides/dist/* .vercel/output/static/slides

# Replace the config file and add a root HTML document
cp config.json .vercel/output/config.json
cp public/index.html .vercel/output/static/index.html 