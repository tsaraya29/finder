var friends = require('../data/friends.js');

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
	
	// comparison logic here///
	// user1 will be req.body.score 
	// create for loop that loops thru friends array
	//least

	var bestMatch = {
		name: "",
		photo: "",
		diff: 1000
	};

	var friendData = req.body;
	var userScores = friendData.scores;

	console.log(userScores);

	var totalDiff = 0;
		for(var i = 0; i < friends.length; i++) {
		 console.log(friends[i]);
		 totalDiff = 0;
		 
		 //nested loop
		 for (var j = 0; j < friends[i].scores; j++){
			 totalDiff += Math.abs(parseInt(userScores[j] - parseInt(friends[i])));
			 //if the sum of the difference in scores is less than difference of the current match
			 if (totalDiff <= bestMatch.diff){
				bestMatch.name = friends[i].name;
				bestMatch.photo = friends[i].photo;
				bestMatch.diff = totalDiff;
			 }
		 }
		}
	friends.push(friendData);
	res.json(bestMatch); // returns data back to front end application
	console.log(req.body);

	
});
};	