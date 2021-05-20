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

// Required for Google OAuth
const cookieParser = require('cookie-parser');
const {
  OAuth2Client
} = require('google-auth-library');
const {
  resourceUsage
} = require('process');
const CLIENT_ID = "323018649258-4ul4o7ceobbqt2u9kr3gh6g7vauoi9t7.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID);
app.use(express.json());

// Google OAuth token
app.post('/login', function (req, res) {
  let token = req.body.token;
  console.log(token);

  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    const username = payload['name'];
    const email = payload['email'];

    console.log(payload);
    console.log(userid);
    console.log(username);
    console.log(email);
  }
  verify()
    .then(function () {
      res.send('success');
    }).catch(console.error);
});

async function addNewUser() {

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'accounts'
  });

  // THIS IS FOR LIVE SERVER
  // const connection = mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   database: 'accounts'
  // });

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

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    multipleStatements: true
  });

  // THIS IS FOR LIVE SERVER
  // const connection = await mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   multipleStatements: true
  // });

  const createDBAndTables = `CREATE DATABASE IF NOT EXISTS accounts;
        use accounts;
        CREATE TABLE IF NOT EXISTS user (
        ID int NOT NULL AUTO_INCREMENT,
        username varchar(30),
        firstName varchar(30),
        lastName varchar(30),
        password varchar(30),
        oldscore DECIMAL(7),
        currentscore DECIMAL(7),
        goal DECIMAL(7),
        email varchar(50),
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
    $skeleton("#content-to-replace").html($content("body"));
    $skeleton("#linkToCSS").attr("href", "css/mainpage.css");
    $skeleton("#profile_name").html(req.session.name);

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

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

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

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

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

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
    // $skeleton("#linkToCSS").attr("href", "css/challenges.css");
    // $skeleton("#linkToCSS2").attr("href", "css/barfiller.css");
    $skeleton("#linkToCSS3").attr("href", "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");
    $skeleton("#linkToCSS4").attr("href", "css/goals.css");

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

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

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

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

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/survey-intro', function (req, res) {
  if (req.session.loggedIn) {

    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let survey = fs.readFileSync('./html/survey-intro.html', "utf8");
    let surveyDOM = new JSDOM(survey);
    let $survey = require("jquery")(surveyDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($survey("body"));
    $skeleton("#linkToCSS").attr("href", "css/survey.css");

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/survey-transport', function (req, res) {
  if (req.session.loggedIn) {

    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let survey = fs.readFileSync('./html/survey-transport.html', "utf8");
    let surveyDOM = new JSDOM(survey);
    let $survey = require("jquery")(surveyDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($survey("body"));
    $skeleton("#linkToCSS").attr("href", "css/survey.css");

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/survey-water', function (req, res) {
  if (req.session.loggedIn) {

    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let survey = fs.readFileSync('./html/survey-water.html', "utf8");
    let surveyDOM = new JSDOM(survey);
    let $survey = require("jquery")(surveyDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($survey("body"));
    $skeleton("#linkToCSS").attr("href", "css/survey.css");

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/survey-home', function (req, res) {
  if (req.session.loggedIn) {

    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let survey = fs.readFileSync('./html/survey-home.html', "utf8");
    let surveyDOM = new JSDOM(survey);
    let $survey = require("jquery")(surveyDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($survey("body"));
    $skeleton("#linkToCSS").attr("href", "css/survey.css");

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

    res.set('Server', '50Greener Engine');
    res.set('X-Powered-By', '50Greener');
    res.send(skeletonDOM.serialize());
  } else {
    res.redirect('/');
  }
});

app.get('/survey-food', function (req, res) {
  if (req.session.loggedIn) {

    let skeleton = fs.readFileSync('./html/skeleton.html', "utf8");
    let skeletonDOM = new JSDOM(skeleton);
    let $skeleton = require("jquery")(skeletonDOM.window);

    let survey = fs.readFileSync('./html/survey-food.html', "utf8");
    let surveyDOM = new JSDOM(survey);
    let $survey = require("jquery")(surveyDOM.window);

    $skeleton("#content-to-replace").empty();
    $skeleton("#content-to-replace").html($survey("body"));
    $skeleton("#linkToCSS").attr("href", "css/survey.css");

    $skeleton("#nav-login").replaceWith("<div id='nav-logout' class='options'>Log Out</div>");

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

var currentUser;
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
        currentUser = req.body.loginUsername;
        req.session.loggedIn = true;
        req.session.name = rows.firstName;
        req.session.save(function (err) { })
        res.send({
          status: "success",
          msg: "Logged in."
        });
      }
    });

});


function authenticate(username, pwd, callback) {

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'accounts'
  });

  // THIS IS FOR LIVE SERVER
  // const connection = mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   database: 'accounts'
  // });

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
        currentUser = req.body.signupUsername;
        req.session.loggedIn = true;
        req.session.name = rows.firstName;
        req.session.save(function (err) { })
        res.send({
          status: "success",
          msg: "Signed up."
        });
      }
    });

});


function insertUser(username, firstName, lastName, pwd, callback) {

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'accounts'
  });

  // THIS IS FOR LIVE SERVER
  // const connection = mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   database: 'accounts'
  // });

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

app.post('/set-old-score', function (req, res) {
  console.log("setting score");
  res.setHeader('Content-Type', 'application/json');

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'accounts'
  });

  // THIS IS FOR LIVE SERVER
  // const connection = mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   database: 'accounts'
  // });
  connection.connect();

  connection.query('UPDATE user SET oldScore = ? WHERE username = ?',
    [req.body.score, currentUser],
    function (error, results, fields) {
      if (error) {
        throw error;
      }

      res.send({
        status: "success",
        msg: "Score updated."
      });

    });
  connection.end();
});


app.get('/get-old-score', function (req, res) {

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'accounts'
  });

  // THIS IS FOR LIVE SERVER
  // const connection = mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   database: 'accounts'
  // });

  connection.connect();
  console.log("USER: " + currentUser);
  connection.query('SELECT oldscore FROM user WHERE username = ?', [currentUser], function (error, results) {
    if (error) {
      throw error;
    }
    console.log('Rows returned are: ', results);
    res.send(results);
  });
  connection.end();
});

app.post('/update-goal', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'accounts'
  });

  // THIS IS FOR LIVE SERVER
  // const connection = mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   database: 'accounts'
  // });
  connection.connect();
  console.log("Data sent to db: " + req.body.userGoal);
  connection.query('UPDATE user SET goal = ? WHERE username = ?',
    [req.body.userGoal, currentUser],
    function (error) {
      if (error) {
        throw error;
      }

      res.send({
        status: "success",
        msg: "Record updated."
      });

    });
  connection.end();
});

app.post('/changeUsername', function (req, res) {

  res.setHeader('Content-Type', 'application/json');

  let results = changeUser(req.body.changeUsername,
    function (rows) {
      if (rows == null) {
        res.send({
          status: "fail",
          msg: "This username already exists. Try another one"
        });
      } else {
        currentUser = req.body.changeUsername;

        res.send({
          status: "success",
          msg: "Username updated."
        });
      }
    });

});


function changeUser(newUsername, callback) {

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'accounts'
  });

  // THIS IS FOR LIVE SERVER
  // const connection = mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   database: 'accounts'
  // });

  connection.query(
    "SELECT * FROM user WHERE username = ?", [newUsername],
    function (error, results) {
      if (error) {
        throw error;
      }

      if (results.length > 0) {
        return callback(null);

      } else {
        connection.query('UPDATE user SET username = ? WHERE username = ?',
          [newUsername, currentUser],
          function (error, results) {
            if (error) {
              throw error;
            }
          });
        connection.query(
          "SELECT * FROM user WHERE username = ?", [newUsername],
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
    connection.end();
}

app.post('/changePassword', function (req, res) {

  res.setHeader('Content-Type', 'application/json');

  // THIS IS FOR LOCAL TESTING / DEVELOPMENT
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'accounts'
  });

  // THIS IS FOR LIVE SERVER
  // const connection = mysql.createConnection({
  //   host: 'aa1epf9tbswcoc5.cochyvrjmhpf.us-west-2.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'admin',
  //   password: '50percentgreener',
  //   database: 'accounts'
  // });


  connection.query('UPDATE user SET password = ? WHERE username = ?',
    [req.body.changePassword, currentUser],
    function (error, results) {
      if (error) {
        throw error;
      }
      res.send({
        status: "success",
        msg: "Password updated."
      });
    });
    connection.end();
});

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