const express = require ("express");
const router = express.Router();
const path = require ("path");
const port = process.env.PORT || 3002;
const db = require("./models/index");
const Role = db.role;
const cors = require('cors');
const bodyParser  = require('body-parser');
const mongoose = require ('mongoose');
const UserRoutes = require("./routes/UserRoutes");
const BlogRoutes = require('./routes/Blog')
require("dotenv").config();

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use('/users', UserRoutes);
app.use('/blog', BlogRoutes);

// Step 1:
app.use(express.static(path.join(__dirname, "/client/build")));
// Step 2:

db.mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
   
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });


app.get('/may', (req,res)=>{
	res.render('index');
})


app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port);
