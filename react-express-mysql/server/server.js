// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Have this node server serve our react app
const path = require('path');
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Get the functions in the db.js file to use
const db = require('./services/db');

// Create a route for root - /
app.get("/", function(req, res) {
    res.send("Hello worldxxx!");
});

// Create a route for testing the db
app.get("/db_test", function(req, res) {
    // Assumes a table called test_table exists in your database
    sql = 'select * from test_table';
    db.query(sql).then(results => {
        console.log(results);
        res.send(results)
    });
});

app.get("/api", (req, res) => {
    sql = 'select * from test_table';
    db.query(sql).then(results => {
        console.log(results);
        res.json({message: JSON.stringify(results)});
    });
    //res.json({ message: "Hello from serveryyy!" });
  });

// Create a route for /goodbye
// Responds to a 'GET' request
app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request
app.get("/hello/:name", function(req, res) {
    // req.params contains any parameters in the request
    // We can examine it in the console for debugging purposes
    console.log(req.params);
    //  Retrieve the 'name' parameter and use it in a dynamically generated page
    res.send("Hello " + req.params.name);
});

// All other GET requests not handled before will return static build of the react app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });


// Start server on port 3001
app.listen(3001,function(){
    console.log(`Server running at http://127.0.0.1:3001/`);
});