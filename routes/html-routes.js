// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

	// loads the initial landing page of the app
	app.get("/", function(req, res) {
		res.render("index");
	});

	// loads the create event form page
	app.get("/new", function(req, res) {
		res.render("new");
	});
  
  // loads update form page for unique user
  app.get("/update/:id", function(req, res) {
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(data) {
        res.render("update", {Update: data});
      });

  // loads new.handlebars page after "create event" button
  // click 
  app.get("new/:id", function(req, res) {
    console.log(req.params.id);
    res.render("new",{eventId: req.params.id});
  });
		
	// loads events.handlebars page after "search events" button
	// and finds all events to display on client
	app.get("/events", function(req, res) {
	   	db.Event.findAll({
	   		order: ['date']
	    }).then(function(data) {
	      res.render("events", {Events: data});
	    });
  	});

  	// loads success.handlebars page after successful
	// submission of form inputs into the database
	app.get("/success", function(req, res) {
	    res.render("success");
  	});

 	app.get("/events-conference", function(req, res) {
	   	db.Event.findAll({
      where: {
        category: "Conference"
      }
    })
    .then(function(data) {
      res.render("events", {Events: data});
      console.log(data);
	    });
  	});

 	app.get("/events-cultural", function(req, res) {
	   	db.Event.findAll({
      where: {
        category: "Cultural"
      }
    })
    .then(function(data) {
      res.render("events", {Events: data});
      console.log(data);
	    });
  	});  

 	app.get("/events-sports", function(req, res) {
	   	db.Event.findAll({
      where: {
        category: "Sports"
      }
    })
    .then(function(data) {
      res.render("events", {Events: data});
      console.log(data);
	    });
  	});

 	app.get("/events-social", function(req, res) {
	   	db.Event.findAll({
      where: {
        category: "Social"
      }
    })
    .then(function(data) {
      res.render("events", {Events: data});
      console.log(data);
	    });
  	});





};