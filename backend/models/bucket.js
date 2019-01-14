const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bucket = new Schema({
    email: String,
    subject: String
});
module.exports = mongoose.model('bucket', bucket);