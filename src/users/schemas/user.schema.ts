import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: {type: String, default: ""},
    email: {type: String, default: "", Unique: true},
    password: {type: String, default: ""}
});