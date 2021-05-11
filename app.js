"use strict";
const express = require('express');
const session = require('express-session');
const app = express();
const fs = require("fs");
const mysql = require('mysql2');
const { JSDOM } = require('jsdom');

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/img', express.static('images'));
app.use('/html', express.static('html'));

app.get('/signup', function (req, res) {
  let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
  let skeletonDOM = new JSDOM(skeleton);
  let $skeleton = require("jquery")(skeletonDOM.window);

  let signup = fs.readFileSync('./html/signup.html', "utf8");
  let signupDOM = new JSDOM(signup);
  let $signup = require("jquery")(signupDOM.window);

  $skeleton("#content-to-replace").replaceWith($signup("#signup-container"));
});

app.get('/login', function (req, res) {
  let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
  let skeletonDOM = new JSDOM(skeleton);
  let $skeleton = require("jquery")(skeletonDOM.window);

  let login = fs.readFileSync('./html/login.html', "utf8");
  let loginDOM = new JSDOM(login);
  let $login = require("jquery")(loginDOM.window);

  $skeleton("#content-to-replace").replaceWith($signup("#login-container"));
});