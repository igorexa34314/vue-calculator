#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
cp index.html 404.html

# if deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A

# git commit -m 'Test deploy'
git commit -m 'Firts release with full functionality'

# deploying to https://igorexa34314.github.io/vue-calculator
git push -f git@github.com:igorexa34314/vue-calculator.git main:gh-pages

cd -