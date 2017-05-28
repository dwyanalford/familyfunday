// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

	// index route loads home page
	app.get("/", function(req, res) {
	    res.sendFile(path.join(__dirname + "/../public/index.html"));
	});

	// new.html route loads/displays form to create new events
	app.get("/new", function(req, res) {
	    res.sendFile(path.join(__dirname + "/../public/new.html"));
	});

	// events.html route loads/displays all events in the database
	app.get("/events", function(req, res) {
	    res.sendFile(path.join(__dirname + "/../public/events.html"));
	});

};