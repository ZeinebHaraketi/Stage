import express from 'express';
import mongoose from 'mongoose';
import Blogs from '../models/blogs.js';

const router = express.Router();

export const AddBlog = async (req, res) => {
    const { titre, image, contenu } = req.body;

    const newBlog = new newBlog({ titre, image, contenu});

    try {
        await newBlog.save();

        res.status(201).json(newBlog );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const FindAllBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find();
                
        res.status(200).json(blogs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const FindSingleBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blogs.findById(id);
        
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const UpdateBlog = async (req, res) => {
    const { id } = req.params;
    const { titre, image, contenu } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);

    const updatedBlog = { titre,image, contenu, _id: id };

    await Blogs.findByIdAndUpdate(id, updatedBlog, { new: true });

    res.json(updatedBlog);

}
export const DeleteBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);

    await Blogs.findByIdAndRemove(id);

    res.json({ message: "Blog deleted successfully." });
}

export default router;
