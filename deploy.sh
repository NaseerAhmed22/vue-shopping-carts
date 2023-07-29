#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -A
git commit -m "New Deployment"
git push -f https://github.com/NaseerAhmed22/vue-shopping-carts.git main:gh-pages
cd -