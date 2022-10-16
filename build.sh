#!/bin/sh

# Little hack to deploy all the apps in a single Vercel project under different urls

find . -type d -name output -exec rm -rf {} +
mkdir -p .vercel/output/functions

pnpm run -r build

for appName in $(ls ./apps) 
do
    mkdir -p .vercel/output/static/$appName
    cp -r apps/$appName/.vercel/output/functions/render.func .vercel/output/functions/$appName.func
    cp -r apps/$appName/.vercel/output/static/_app .vercel/output/static/$appName/_app
done

cp -r apps/app-history-spa/dist/* .vercel/output/static/app-history-spa

cp config.json .vercel/output/config.json
cp public/index.html .vercel/output/static/index.html 