// ROUTES
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// 

// When this route is 'hit' we respond with JSON data object of friends
APP.get("/api/friends", function(req, res){
	res.json(friends);
});



// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. When this route is 'hit' we console log the posted data then
// redirect to user back to the main route. (above, which sends the home.html file)
APP.post("/api/friends", function(req, res){
	console.log(req.body);

	res.redirect("/");
});