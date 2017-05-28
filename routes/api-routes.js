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
    console.log(req.body);
    db.Event.create({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      venue: req.body.venue,
      description: req.body.description,
      category: req.body.category
    })
    .then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // GET route for getting all of the events in db
  app.get("/api/events", function(req, res) {
    db.Event.findAll({})
    .then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Get route for returning events of a specific category
  app.get("/api/events/category/:category", function(req, res) {
    db.Event.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  
};
