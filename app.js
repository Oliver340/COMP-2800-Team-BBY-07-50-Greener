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