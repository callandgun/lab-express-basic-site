const express = require("express");
const path = require("path");
const app = express();

/* any files in the public/ directory, such as your CSS stylesheets, 
scripts, and images, can be accessed by the browser ->>> */ 
app.use(express.static("public"));

// dirname variable refers to the root directory of the project ->>>
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/lab-express-basic-site/views/index.html");
  });
  
  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });

  app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/lab-express-basic-site/views/about.html");
  });

  app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/lab-express-basic-site/views/about2.html");
  });
  
  
 
  




