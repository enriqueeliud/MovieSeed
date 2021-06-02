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

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
app.use('/users', UserRoutes);
app.use('/blog', BlogRoutes);

db.mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });


		function initial() {
      Role.collection.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
          new Role({
            name: "user",
          }).save((err) => {
            if (err) {
              console.log("error", err);
            }

            console.log("added 'user' to roles collection");
          });

          new Role({
            name: "moderator",
          }).save((err) => {
            if (err) {
              console.log("error", err);
            }

            console.log("added 'moderator' to roles collection");
          });

          new Role({
            name: "admin",
          }).save((err) => {
            if (err) {
              console.log("error", err);
            }

            console.log("added 'admin' to roles collection");
          });
        }
      });
    }
app.get('/may', (req,res)=>{
	res.render('index');
})

app.listen(3002);
