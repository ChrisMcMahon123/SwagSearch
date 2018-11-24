### Step 1: Install create-react-app

    create-react-app your-app-name

### Step 2: Install packages for create react app

 npm install; 

### Step 3: Install express

npm install express --save

### Step 4: Create a server.js file

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

### Step 5: Update your package.json

"proxy": "http://localhost:8080"

If you didn't do this we would have to create slow production builds every time (rather than the faster for development npm run start method). This is because npm start uses port 3000, which is not the same port that the express APIs are running on (8080).
Step 6: Start the express server

node server.js

Or nodemon if you prefer.

### Step 6: Start your react app

Keep node running, do this in a separate tab/ window.

npm start 

Start the react build with hot reloading.
Conclusion

Now you can develop all you want on localhost:3000 by using npm run start and your API's will work as expected (despite requests coming from port 3000).

When you want to deploy, just run the production build npm run build and serve your app from localhost:8080, which is node server.js in this example (note the port number at the bottom of server.js).

Profit. 
