#!/bin/sh

find . -type d -name output -exec rm -rf {} +
mkdir .vercel/output

pnpm run -r build

mv apps/app-edge/.vercel/output/functions/render.func apps/app-edge/.vercel/output/functions/app-edge.func 
cp -r apps/app-edge/.vercel/output .vercel

cp config.json .vercel/output/config.json

