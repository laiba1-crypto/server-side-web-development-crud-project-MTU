const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/routes.js");
const dbConnection = require("./dataBase/db.js");
const cors = require("cors");
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
const port = 8000; 
app.use("/", route);  
dbConnection();
app.listen(port, () => {
  console.log(`Project is running on ${port} port.`);
});
