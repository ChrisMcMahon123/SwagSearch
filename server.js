const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const clarifaiKey = require('./custom_modules/clarifai')

app.use(express.static(path.join(__dirname, "build")));


//Add custom Clarifai router
app.use('/', require('./routes/clarifai'))
app.use('/', require('./routes/twitter'))


// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(process.env.PORT || 8080, function(){
  console.log('Listening to port 8080')
});

