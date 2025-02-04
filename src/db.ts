import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://admin:6CWO6tGKNznS8LcA@cluster0.s7plg.mongodb.net/brainly-db")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
});

export const ContentModel = model("Content", ContentSchema);