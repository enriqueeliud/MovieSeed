const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.reviews = require("./Reviews");
db.blog = require('./Blog');


module.exports = db;
