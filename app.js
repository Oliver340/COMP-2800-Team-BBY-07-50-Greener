"use strict";
const express = require('express');
const session = require('express-session');
const app = express();
const fs = require("fs");
const mysql = require('mysql2');
const {
  JSDOM
} = require('jsdom');

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/html', express.static('html'));


app.use(session({
  secret: 'super secret password',
  name: '50Greener',
  resave: false,
  saveUninitialized: true
}));

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


  let dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
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
        username varchar(30),
        firstName varchar(30),
        lastName varchar(30),
        password varchar(30),
        PRIMARY KEY (ID));`;

  await connection.query(createDBAndTables);
  let results = await connection.query("SELECT COUNT(*) FROM user");
  let count = results[0][0]['COUNT(*)'];

  if (count < 1) {
    results = await connection.query("INSERT INTO user (username, firstName, lastName, password) values ('arron_ferguson@bcit.ca', 'arron', 'f', 'admin')");
    console.log("Added one user record.");
  }
  connection.end();
}

app.get('/mainpage', function (req, res) {
  console.log("mainpage");
  if (req.session.loggedIn) {

    let skeletonFile = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeletonFile);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let content = fs.readFileSync('./html/mainpage.html', "utf8");
    let contentDOM = new JSDOM(content);
    let $content = require("jquery")(contentDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").replaceWith($content("body"));
    $skeleton("#linkToCSS").attr("href", "css/mainpage.css");
    $skeleton("#profile_name").html(req.session.name);

    //
    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");
    //

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());

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
  $skeleton("#content-to-replace").html($signup("body"));
  $skeleton("#linkToCSS").attr("href", "css/signup.css");

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
  $skeleton("#content-to-replace").html($login("body"));
  $skeleton("#linkToCSS").attr("href", "css/login.css");

  res.set('Server', '50Greener Engine');
  res.set('X-Powered-By', '50Greener');
  res.send(skeletonDOM.serialize());
});

app.get('/about', function (req, res) {
  if (req.session.loggedIn) {

    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let about = fs.readFileSync('./html/about.html', "utf8");
    let aboutDOM = new JSDOM(about);
    let $about = require("jquery")(aboutDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($about("body"));
    $skeleton("#linkToCSS").attr("href", "css/about.css");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/challenges', function (req, res) {

  if (req.session.loggedIn) {
    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let challenges = fs.readFileSync('./html/challenges.html', "utf8");
    let challengesDOM = new JSDOM(challenges);
    let $challenges = require("jquery")(challengesDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($challenges("body"));
    $skeleton("#linkToCSS").attr("href", "css/challenges.css");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/goals', function (req, res) {
  if (req.session.loggedIn) {

    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let goals = fs.readFileSync('./html/goals.html', "utf8");
    let goalsDOM = new JSDOM(goals);
    let $goals = require("jquery")(goalsDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($goals("body"));
    $skeleton("#linkToCSS").attr("href", "css/challenges.css");
    $skeleton("#linkToCSS2").attr("href", "css/barfiller.css");
    $skeleton("#linkToCSS3").attr("href", "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");
    $skeleton("#linkToCSS4").attr("href", "css/goals.css");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/information', function (req, res) {

  if (req.session.loggedIn) {
    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let information = fs.readFileSync('./html/information.html', "utf8");
    let informationDOM = new JSDOM(information);
    let $information = require("jquery")(informationDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($information("body"));
    $skeleton("#linkToCSS").attr("href", "css/information.css");
    $skeleton("#linkToCSS3").attr("href", "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/settings', function (req, res) {
  if (req.session.loggedIn) {

    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let settings = fs.readFileSync('./html/settings.html', "utf8");
    let settingsDOM = new JSDOM(settings);
    let $settings = require("jquery")(settingsDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($settings("body"));
    $skeleton("#linkToCSS").attr("href", "css/settings.css");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.post('/authenticate', function (req, res) {
  console.log("authentication");
  res.setHeader('Content-Type', 'application/json');
  let results = authenticate(req.body.loginUsername, req.body.loginPassword,
    function (rows) {
      if (rows == null) {
        res.send({
          status: "fail",
          msg: "User account not found."
        });
      } else {
        req.session.loggedIn = true;
        req.session.name = rows.firstName;
        req.session.save(function (err) {})
        res.send({
          status: "success",
          msg: "Logged in."
        });
      }
    });

});


function authenticate(username, pwd, callback) {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'accounts'
  });

  connection.query(
    "SELECT * FROM user WHERE username = ? AND password = ?", [username, pwd],
    function (error, results) {
      if (error) {
        throw error;
      }

      if (results.length > 0) {
        return callback(results[0]);
      } else {
        return callback(null);
      }

    });

}

app.post('/newUser', function (req, res) {
  console.log("new user");
  res.setHeader('Content-Type', 'application/json');

  let results = insertUser(req.body.signupUsername, req.body.signupFirstName, req.body.signupLastName, req.body.signupPassword,
    function (rows) {
      if (rows == null) {
        res.send({
          status: "fail",
          msg: "This username already exists."
        });
      } else {
        req.session.loggedIn = true;
        req.session.name = rows.firstName;
        req.session.save(function (err) {})
        res.send({
          status: "success",
          msg: "Signed up."
        });
      }
    });

});


function insertUser(username, firstName, lastName, pwd, callback) {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'accounts'
  });

  connection.query(
    "SELECT * FROM user WHERE username = ?", [username],
    function (error, results) {
      if (error) {
        throw error;
      }

      if (results.length > 0) {
        return callback(null);

      } else {
        connection.query(
          "INSERT INTO user (username, firstName, lastName, password) values (?, ?, ?, ?)", [username, firstName, lastName, pwd],
          function (error, results) {
            if (error) {
              throw error;
            }
          });
        connection.query(
          "SELECT * FROM user WHERE username = ? AND password = ?", [username, pwd],
          function (error, results) {
            if (error) {
              throw error;
            }

            if (results.length > 0) {
              return callback(results[0]);
            } else {
              return callback(null);
            }
          });
      }

    });

}

app.get('/logout', function (req, res) {
  req.session.destroy(function (error) {
    if (error) {
      console.log(error);
    }
  });

  let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
  let skeletonDOM = new JSDOM(skeleton);
  let $skeleton = require("jquery")(skeletonDOM.window);
  $skeleton("#nav-logout").replaceWith("<div id='nav-login' class='options'>Log In</div>");
  res.redirect("/");
})

const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log('Listening on port ' + port + '!');
})