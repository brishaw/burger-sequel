## Eat Da Burger - The "Sequel"
The same great restaurant app that you loved before, but now improved using Sequelize to allow users to input the names of burgers they'd like to eat.

## Link to the deployed app
https://secret-atoll-28145.herokuapp.com/

## What is this repo or project?
Eat Da Burger is a burger logger with MySQL, Node, Express, Handlebars and Sequelize. It follows the MVC design pattern; using Node and Sequelize to query and route data in the app, and Handlebars to generate the HTML.

## Differences in this Version of Eat Da Burger
* This version uses Sequelize, which is a promise-based ORM for Node.js

* Replaced the  MySQL `Burger` model with a Sequelized equivalent.

* Edited the model and initial migration file to make the burger's devoured field carry a default value of false -- avoiding possible bugs.
 
* Synced the models.

## How does it work?
The sequelized version of this app will work (visually) identical to the previous version.

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

1. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

2. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

3. The app stores every burger in a database, whether it's devoured or not.

## Who will use this repo or project?
**Anyone** who enjoys creating custom burgers, devouring said burgers, or removing bad burgers from the menu.

## What is the goal of this project?
The goal of this project is to re-create the app using MySQL, Node.js, Express and Handlebars. Then replace the MySql model file with a sequelized equivalent before finally hosting the app on Heroku.