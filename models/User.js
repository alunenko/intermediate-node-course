const mongoose = require('mongoose');

const UserSchema = {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
};
const UserMongooseSchema = new mongoose.Schema(UserSchema);

module.exports= mongoose.model('User', UserMongooseSchema);
