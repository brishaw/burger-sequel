var db = require("../models");

// Routes
module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    db.Burgers.findAll().then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.Burgers.create({
      burger_name: req.body.name,
      devoured: req.body.devoured
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  app.delete("/api/burgers/:id", function(req,res) {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Burgers.update(
      { 
        devoured: req.body.devoured
      },
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurgers) {
        res.json(dbBurgers);
    });
  })
}; // module.exports
