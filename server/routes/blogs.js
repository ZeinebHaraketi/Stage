import express from 'express';
import { AddBlog, FindAllBlogs, FindSingleBlog, UpdateBlog, DeleteBlog } from '../controllers/blogs.js';
const router= express.Router()

/* add blog */
router.post('/blogs', AddBlog)

/* find all blogs */
router.get('/blogs', FindAllBlogs)

/* find single blog */
router.get('/blogs/:id', FindSingleBlog)

/* update blog */
router.put('/blogs/:id', UpdateBlog)

/* delete blog */
router.delete('/blogs/:id', DeleteBlog)


export default router;