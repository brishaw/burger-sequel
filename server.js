// Dependencies
var express = require("express");
// Sets up Express App
var app = express();
var PORT = process.env.PORT || 8080;
// Requiring models for syning
var db = require("./models");
// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static Directory
app.use(express.static("public"));
// Routes
require("./controllers/burgersController.js")(app);
// app.use(routes);
// Syncing sequelize models and then starting Express App
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});