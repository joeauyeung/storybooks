const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
});

// Enable plugin for findOrCreate for Google auth
UserSchema.plugin(require("mongoose-findorcreate"));

module.export = mongoose.model("User", UserSchema);