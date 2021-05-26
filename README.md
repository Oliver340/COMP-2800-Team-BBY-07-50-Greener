# 50% Greener
## Contributors: Oliver Harrison, Victor Ly, Kyung Min Song & Avneet Sandhu

* [General info](#general-info)
* [Features](#features)
* [Technologies](#technologies)
* [Set-up details](#set-up-details)
* [Contents](#content)


## General Info

This is a single-page web application design to promote awareness of one's environmental impact and help them to reduce it.

Problem: Climate emergency plan needs involvement from the community to meet goals set by the City. People want to participate but don't know how and needs an easy way to visualize and track their own emission levels as well as city-wide goals.

Solution: 50% Greener allows users to measure their initial carbon emissions score and then set a goal for reducing their carbon emissions and lowering their score. Users can check off tasks relating to ways in which they reduce their environmental impact, thus lowering their carbon emissions score.


## Features

## Technologies
Technologies used for this project:

* HTML, CSS
* JavaScript, JQueryUI
* Node.js + modules
* SQL
* Visual Studio Code IDE
* GitHub
* AWS Beanstalk
* AWS RDS


## Set-up Details
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

## Content

Content of the project folder:

```
 Top level of project folder:
├── .gitignore               # Git ignore file
├── app.js                   # server-side code that runs the application
├── package-lock.json        # needed for node functionality
├── package.json             # needed for node functionality
└── README.md                # information on our application

It has the following subfolders and files:
├── node_modules           # Folder for node modules
├── images                 # Folder for images
    /50GreenerLogo.png          # logo for our application
    /avneet.png                 # picture of Avneet for about us page
    /challengesicon.png         # icon for challenges page in navbar
    /favicon.png                # favicon for browser tabs
    /hamicon.png                # hamburger menu icon
    /homeicon.png               # icon for home page in navbar
    /informationicon.png        # icon for information page in navbar
    /kyung.png                  # picture of Kyung for about us page
    /oliver.png                 # picture of Oliver for about us page
    /victor.png                 # picture of Victor for about us page
├── js                     # Folder for scripts
    /about.js                   # functions for the about page
    /challenges-populate.js     # functions to populate the challenges page with random challenges sorted by category
    /client.js                  # client side functionality that contacts server side code to make app interactive
    /egg.js                     # functions for the easter egg challenge
    /goals.js                   # functions to set a goal
    /information-populate.js    # functions to populate the information page with information sorted by category
    /login.js                   # functions to login and perform user authentication
    /mainpage-pie-chart.js      # functions for the pie chart on the home page
    /mainpage-semi-circle.js    # functions for the semicircle chart on the home page
    /signup.js                  # functions to sign up as a new user
    /survey.js                  # functions for the survey
    /tabs-challenges.js         # functions for the tabs on the challenges page
    /tabs-information.js        # functions for the tabs on the information page
├── css                    # Folder for styles
    /about.css                  # styling of the about us page
    /challenges.css             # styling of the challenges page
    /goals.css                  # styling of the goals page
    /index.css                  # styling of the index/landing page
    /information.css            # styling of the information page
    /login.css                  # styling of the login page
    /mainpage.css               # styling of the home page, once signed in
    /settings.css               # styling of the settings page
    /signup.css                 # styling of the signup page
    /skeleton.css               # general styling applied to all pages
    /survey.css                 # styling of the survey pages
├── html                   # Folder for html template files
    /about.html                  # html template of the about us page
    /challenges.html             # html template of the challenges page
    /goals.html                  # html template of the goals page
    /index.html                  # html template of the index/landing page
    /information.html            # html template of the information page
    /login.html                  # html template of the login page
    /mainpage.html               # html template of the home page, once signed in
    /settings.html               # html template of the settings page
    /signup.html                 # html template of the signup page
    /skeleton.html               # general html into which the templates are inserted, includes the top and bottom navbars
    /survey-food.html            # html template of the survey diet page
    /survey-home.html            # html template of the survey home page
    /survey-intro.html           # html template of the survey introduction page
    /survey-transport.html       # html template of the survey transportation page
    /survey-water.html           # html template of the survey water page
├── json                   # Folder for json data files
    /commute.json                # json content for transportation challenges
    /food.json                   # json content for diet challenges
    /home.json                   # json content for home challenges
    /information-commute.json    # json content for tranportation information
    /information-food.json       # json content for diet information
    /information-home.json       # json content for home information
    /information-links.json      # json content for information links
    /information-water.json      # json content for water information
    /water.json                  # json content for water challenges
├── tests                  # Folder for testing files
    /50 Greener tests.side       # Selenium testing file

```