// Dependencies
// =============================================================
/*var express = require("express");
var bodyParser = require("body-parser");*/
var path = require("path");

// Sets up the Express App
// =============================================================
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");/*
var bodyParser = require("body-parser");*/
//var path = require("path");

/*var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));*/
// Directory for html files added to express app
//app.use(express.static(__dirname + '/../public'));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

module.exports = function(app) {
	app.use(express.static(__dirname + '/../public'));

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });

};

// Starts the server to begin listening
// =============================================================
/*app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});*/