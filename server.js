const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const nameRoutes = require('./src/routes/name.route');

// using as middleware
app.use('/api/v1/names', nameRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



// const express = require('express');
// const app = express();

// let path = __dirname + '/views/';

// app.use(express.static('views'));

// // Create a Server
// const server = app.listen(5000, function () {
 
//   let host = server.address().address
//   let port = server.address().port
 
//   console.log("App listening at http://%s:%s", host, port); 
// })

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/api/V1/names', function (req, res) {
//   res.json({
//     names: "Jack",
//     description: "The awesome"
//   })
// })

// app.get('/', function (req,res) {
//   res.sendFile(path + "index.html");
// });

