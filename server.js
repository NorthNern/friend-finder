


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var appServer = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
appServer.use(bodyParser.json());
appServer.use(bodyParser.urlencoded({
  extended: true
}));
appServer.use(bodyParser.text());
appServer.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

appServer.use(express.static('app/public/'));

// (DATA)
// =============================================================
// var userArray = []

// // This is a test, COMMENT OUT
// userArray[0] = {
//   "name":"Testy McTesterface",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
// console.log(userArray);

// Routes
// =============================================================

  require("./app/routing/apiRoutes")(appServer);
  require("./app/routing/htmlRoutes")(appServer);

// Basic route that sends the user first to the AJAX Page
// appServer.get("/", function(req, res) {
//   //TODO: Make this a default USE route
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// appServer.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "survey.html"));
// });

// appServer.get("/api/friends", function(req, res) {
//   res.json(userArray);
// });



// appServer.post("/api/friends", function(req, res) {
  

// Starts the server to begin listening
// =============================================================
appServer.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});






// In this code, jQuery is used to "download" the data from our server
  // We then dynamically display this content in our table. This is very similar to the group projects you just completed.
  // It's also very similar to the NYT search application. In fact, I copied a ton of code from there.

  // function runTableQuery(){

  //  // Here we get the location of the root page.
  //  // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
  //  var currentURL = window.location.origin;

  //  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  //  $.ajax({url: currentURL + "/api/tables", method: "GET"})
  //    .done(function(tableData) {

  //      // Here we are logging the URL so we have access to it for troubleshooting
  //      console.log("------------------------------------");
  //      console.log("URL: " + currentURL + "/api/tables");
  //      console.log("------------------------------------");

  //      // Here we then log the NYTData to console, where it will show up as an object.
  //      console.log(tableData);
  //      console.log("------------------------------------")

  //      // Loop through and display each of the customers
  //      for (var i=0; i<tableData.length; i++){

  //        // Create the HTML Well (Section) and Add the table content for each reserved table
  //        var tableSection = $("<div>");
  //        tableSection.addClass('well');
  //        tableSection.attr('id', 'tableWell-' + i+1)
  //        $('#tableSection').append(tableSection);

  //        var tableNumber = i + 1;


  //        // Then display the remaining fields in the HTML (Section Name, Date, URL)
  //        $("#tableWell-"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
  //      }
  //    });
  // }

  // function runWaitListQuery(){

  //  // Here we get the location of the root page.
  //  // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
  //  var currentURL = window.location.origin;

  //  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  //  $.ajax({url: currentURL + "/api/waitlist", method: "GET"})
  //    .done(function(waitlistData) {

  //      // Here we are logging the URL so we have access to it for troubleshooting
  //      console.log("------------------------------------");
  //      console.log("URL: " + currentURL + "/api/waitlist");
  //      console.log("------------------------------------");

  //      // Here we then log the NYTData to console, where it will show up as an object.
  //      console.log(waitlistData);
  //      console.log("------------------------------------")

  //      // Loop through and display each of the customers
  //      for (var i=0; i<waitlistData.length; i++){

  //        // Create the HTML Well (Section) and Add the table content for each reserved table
  //        var waitlistSection = $("<div>");
  //        waitlistSection.addClass('well');
  //        waitlistSection.attr('id', 'waitlistWell-' + i+1)
  //        $('#waitlistSection').append(waitlistSection);

  //        var tableNumber = i + 1;

  //        // Then display the remaining fields in the HTML (Section Name, Date, URL)
  //        $("#waitlistWell-"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + waitlistData[i].customerID + "</h2>");
  //      }
  //    });
  // }

  // // This function resets all of the data in our tables. This is intended to let you restart a demo.
  // function clearTable(){

  //  var currentURL = window.location.origin;
  //  $.ajax({url: currentURL + "/api/clear", method: "POST"})

  // }

  // $("#clear").on('click', function(){
  //  alert("Clearing...");
  //  clearTable();

  //  // Refresh the page after data is cleared
  //  location.reload();
  // })


  // // Run Queries!
  // // ==========================================
  // runTableQuery();
  // runWaitListQuery();






// var express = require("express");
// var bodyParser = require("body-parser");

// var app = express();
// var port = 3000;

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + "/public"));

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);

// });

// // Root get route
// app.get("/", function(req, res) {

//     connection.query("SELECT * FROM wishes;", function(err, data) {
//       if (err) throw err;

//       // Test it
//       // console.log('The solution is: ', data);

//       // Test it
//       // res.send(data);

//       res.render("index", { wishes: data });
//     });
// });


// // Post route -> back to home
// app.post("/", function(req, res) {

//     // Test it
//     // console.log('You sent, ' + req.body.event);

//     // Test it
//     // res.send('You sent, ' + req.body.event);

//   connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.blabber], function(err, result) {
//     if (err) throw err;

//     res.redirect("/");
//   });

// });

// app.listen(port);
