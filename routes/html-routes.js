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

	// loads index.handlebars page initially
	app.get("/", function(req, res) {
		res.render("index");
	});

	// loads new.handlebars page after "create event" button
	// click 
	app.get("/new", function(req, res) {
		res.render("new");
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


};