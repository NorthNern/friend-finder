// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var friends = require("../data/friends.js");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/friends/", function(req, res) {

    res.json(friends);
  });




  // POST route for saving a new post
  app.post("/api/friends", function(req, res) {
  var newUser = req.body;
  var newUserMatchScores = [];  
  var currentMatchScore = 0;
  // console.log(newUser);
  for (var i = 0; i< friends.length; i++){
    currentMatchScore = 0;
    for (var i2 = 0; i2 <newUser.scores.length; i2++) {
      currentMatchScore += Math.abs(newUser.scores[i2] - friends[i].scores[i2])
    }
    console.log(currentMatchScore);
    newUserMatchScores.push(currentMatchScore)
  }
  var bestMatch = friends[0];
  var bestMatchScore = newUserMatchScores[0];
  console.log (bestMatchScore);
  for (var i = 0; i<friends.length; i++){
    if (newUserMatchScores[i] < bestMatchScore){
      bestMatch = friends[i];
      bestMatchScore = newUserMatchScores[i];
    }
  }

  friends.push(newUser);
  console.log(bestMatch);
  res.json(bestMatch);
  });

};
