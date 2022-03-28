const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
        default: " "
    },
    lasttname: {
        type: String,
        default: " "
    },
    admin: {
        type: Boolean,
        default: false
    }
});
User.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', User);
