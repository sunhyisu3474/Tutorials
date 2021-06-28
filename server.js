const express = require('express');
const server = express();
const port = 80;
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  database: 'tutorials',
  user: 'root',
  password: '#Sunhyisu344774',
  port: '3474'
});

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');
server.use(express.static(__dirname));
//  아래 4개를 라우팅이라고 함.
server.get('/', function (req, res) {
  res.render('index', {});
});

server.get('/hello', function (req, res) {
  res.render('hello', { name: req.query.nameQuery });
});

server.get('/hello/:nameParam', function (req, res) {
  res.render('hello', { name: req.params.nameParam });
});

server.get('/register', function (req, res) {

  res.render('register', {});
});


server.listen(port, function (error) {
  if (error) {
    console.log("에러가 발생하였습니다.");
    console.log(error);
  } console.log("서버가 " + port + "번 포트로 정상적으로 개방되었습니다.");
});
