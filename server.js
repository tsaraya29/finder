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
const PORT = process.env.PORT || 8080; 


// Sets up the Express app to handle data parsing
APP.use(EXPRESS.urlencoded({ extended: true }));
APP.use(EXPRESS.json());

//path to serve static files.
// *NOTE: May need to change to your folder if different.
// APP.use(EXPRESS.static(PATH.join(__dirname, '/public')));


require('./app/routing/apiRoutes')(APP);
require('./app/routing/htmlRoutes')(APP);



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});

