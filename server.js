var express = require('express');
var app = express();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'www.db4free.net',
  user: 's140390',
  password: 'abc123**',
  database: 'db140390'
});
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/index');
});

app.get('/students', function (req, res) {
  connection.connect()

  connection.query('select * from students', function (err, rows, fields) {

    console.log('DATA:' + rows);
    res.render('pages/students', { students: rows })

    console.log('rows');

  })
  connection.end()
});
app.get('/subjects', function (req, res) {
  connection.connect()

  connection.query('select * from subjects', function (err, rows, fields) {

    console.log('DATA:' + rows);
    res.render('pages/subjects', { subjects: rows })

    console.log('rows');

  })
  connection.end()
});
console.log('App is runing at http://localhost:3000/');
app.listen(3000);