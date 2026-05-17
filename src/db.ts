import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb+srv://krishna:krishna2006@cluster0.0wdrbfx.mongodb.net/");

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});

export const UserModel = mongoose.model("User", UserSchema);