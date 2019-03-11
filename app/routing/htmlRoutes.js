// REQUIRE PATH
const PATH = require('path');

// The html routes are separated from the api routes as these routes map the links in the app
module.exports = function(APP) {

//Route for the survey.html file
APP.get("/survey", function(req, res){
	res.sendFile(PATH.join(__dirname, "../public/survey.html"));
});

//Default catch all that leads to home.html
APP.get("*", function(req, res){   
    res.sendFile(PATH.join(__dirname,"../public/home.html"));
});
};





   



