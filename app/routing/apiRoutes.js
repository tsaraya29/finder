// REQUIRE PATH
const PATH = require('path');

// The html routes are separated from the api routes as these routes map the links in the app
module.exports = function(APP) {

// ROUTES
//This is the routes for the survey
APP.get("/api/friends", function(req, res){
	res.json(friends);
});

// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. When this route is 'hit' we console log the posted data then redirect to user back to the main route. 
APP.post("/api/friends", function(req, res){
	console.log(req.body);

	res.redirect("/");
});

}	
