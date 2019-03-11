
// ROUTES
// Below is a series of express routes.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


// When this route is 'hit' we respond with the survey.html file
APP.get("/survey", function(req, res){
    res.send('survey');	
});

//Default catch all that leads to home.html
APP.get("/", function(req, res){   
    res.send('home');	
});



