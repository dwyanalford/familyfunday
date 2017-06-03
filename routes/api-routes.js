// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new event to database
  app.post("/api/events", function(req, res) {
    db.Event.create({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      venue: req.body.venue,
      description: req.body.description,
      category: req.body.category
    })
    .then(function(dbEvent) {
      console.log(dbEvent);
      res.redirect("/success");

    });
  });

  // Route for deleting events
  app.post("/api/events/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbEvent) {
      res.redirect("/events");
      console.log(dbEvent);
    });
  });

   // Route for updating events
  app.put("/api/events", function(req, res) {
    db.Event.update({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      venue: req.body.venue,
      description: req.body.description,
      category: req.body.category
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(event) {
      console.log(event);
      res.json(event);

    });
  });

};









