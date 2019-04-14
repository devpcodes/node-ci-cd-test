＃！/ bin / sh的
ssh devp@prod.example.com << EOF 
cd ~/node-ci-cd-test 
git pull origin master
npm install
pm2 restart all 
exit 
EOF