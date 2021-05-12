"use strict";
const express = require('express');
const session = require('express-session');
const app = express();
const fs = require("fs");
const mysql = require('mysql2');
const { JSDOM } = require('jsdom');

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/html', express.static('html'));

app.use(session({
  secret: 'super secret password',
  name: '50Greener',
  resave: false,
  saveUninitialized: true
})
);

app.get('/', function (req, res) {
  let doc = fs.readFileSync('./html/skeleton.html', "utf8");

  let dom = new JSDOM(doc);
  let $ = require("jquery")(dom.window);

  let index = fs.readFileSync('./html/index.html', "utf8");
  let indexDOM = new JSDOM(index);
  let $index = require("jquery")(indexDOM.window);

  $("#content-to-replace").empty();
  $("#content-to-replace").html($index("body"));
  $("#linkToCSS").attr("href", "css/index.css");


  let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let d = new Date().toLocaleDateString("en-US", dateOptions);

  initDB();

  res.set('Server', '50Greener Engine');
  res.set('X-Powered-By', '50Greener');
  res.send(dom.serialize());

});

async function initDB() {

  const mysql = require('mysql2/promise');

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    multipleStatements: true
  });

  const createDBAndTables = `CREATE DATABASE IF NOT EXISTS accounts;
        use accounts;
        CREATE TABLE IF NOT EXISTS user (
        ID int NOT NULL AUTO_INCREMENT,
        email varchar(30),
        password varchar(30),
        PRIMARY KEY (ID));`;

  await connection.query(createDBAndTables);
  let results = await connection.query("SELECT COUNT(*) FROM user");
  let count = results[0][0]['COUNT(*)'];

  if (count < 1) {
    results = await connection.query("INSERT INTO user (email, password) values ('arron_ferguson@bcit.ca', 'admin')");
    console.log("Added one user record.");
  }
  connection.end();
}

app.get('/mainpage', function (req, res) {

  if (req.session.loggedIn) {

    let skeletonFile = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeletonFile);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let content = fs.readFileSync('./html/mainpage.html', "utf8");
    let contentDOM = new JSDOM(content);
    let $content = require("jquery")(contentDOM.window);

    $skeleton("#content-to-replace").replaceWith($content("body"));

    res.set('Server', 'Wazubi Engine');
    res.set('X-Powered-By', 'Wazubi');
    res.send(profileDOM.serialize());

  } else {
    res.redirect('/');
  }
});

app.get('/signup', function (req, res) {
  let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
  let skeletonDOM = new JSDOM(skeleton);
  let $skeleton = require("jquery")(skeletonDOM.window);

  let signup = fs.readFileSync('./html/signup.html', "utf8");
  let signupDOM = new JSDOM(signup);
  let $signup = require("jquery")(signupDOM.window);

  $skeleton("#content-to-replace").empty();
  $skeleton("#content-to-replace").html($signup("#signup-container"));
  
  res.set('Server', '50Greener Engine');
  res.set('X-Powered-By', '50Greener');
  res.send(skeletonDOM.serialize());
});

app.get('/login', function (req, res) {
  let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
  let skeletonDOM = new JSDOM(skeleton);
  let $skeleton = require("jquery")(skeletonDOM.window);

  let login = fs.readFileSync('./html/login.html', "utf8");
  let loginDOM = new JSDOM(login);
  let $login = require("jquery")(loginDOM.window);

  $skeleton("#content-to-replace").empty();
  $skeleton("#content-to-replace").html($login("#login-container"));

  res.set('Server', '50Greener Engine');
  res.set('X-Powered-By', '50Greener');
  res.send(skeletonDOM.serialize());
});

app.get('/logout', function (req, res) {
  req.session.destroy(function (error) {
    if (error) {
      console.log(error);
    }
  });
  res.redirect("/mainpage");
})

let port = 8000;
app.listen(port, function () {
  console.log('Listening on port ' + port + '!');
})