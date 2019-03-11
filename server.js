// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const EXPRESS = require('express');
const PATH = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const APP = EXPRESS();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000; 


// Sets up the Express app to handle data parsing
APP.use(EXPRESS.urlencoded({ extended: true }));
APP.use(EXPRESS.json());

//path to serve static files.
// *NOTE: May need to change to your folder if different.
APP.use(EXPRESS.static(PATH.join(__dirname, '/public')));



// ================================================================================
// ROUTES
// Below is a series of express routes.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


// When this route is 'hit' we respond with the home.html file
APP.get("/", function(req, res){
	res.sendFile(PATH.join(__dirname, "./home.html"));
});

//When this route is 'hit' we respond with the contacts.html file
APP.get("/contact", function(req, res){
	res.sendFile(PATH.join(__dirname,"./contact.html"));
});

//When this route is 'hit' we console log the posted data then
// redirect to user back to the main route. (above, which sends the home.html file)
APP.post("/contact", function(req, res){
	console.log(req.body);

	res.redirect("/");
});


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});


