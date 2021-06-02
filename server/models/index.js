const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./User")(mongoose);
db.role = require("./Role")(mongoose);
db.reviews = require("./Reviews");
db.blog = require('./Blog');

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
