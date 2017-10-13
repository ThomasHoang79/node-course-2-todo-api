var mongoose = require("mongoose");

var user = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlengh: 1,
        trim: true
    }
});

module.exports = {user};