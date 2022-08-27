import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    titre: String,
    image: String,
    contenu: String,

}, {timestamps: true})



var Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
