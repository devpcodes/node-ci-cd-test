#!/bin/sh
ssh devp@prod.example.com << EOF 
cd ~/node-ci-cd-test 
echo "test1"
git pull origin master
npm install
pm2 restart all 
exit 
EOF