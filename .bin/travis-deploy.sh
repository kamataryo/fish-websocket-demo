#!/usr/bin/env bash
set -e

if [ $TRAVIS_BRANCH != "master" ]; then
  echo "TRAVIS_BRANCH=$TRAVIS_BRANCH"
  echo 'Not deploying.'
  exit 0
fi

# Add necessary files for gh-pages hosting

cd dist

git init
git config user.name 'kamataryo@travis'
git config user.email "kamataryo@users.noreply.github.com"
git remote add origin git@github.com:kamataryo/mermaid-websocket-demo.git

git checkout -b gh-pages
git add .
git commit -m "Deploy [made in travis cron]"
git push -f origin gh-pages
