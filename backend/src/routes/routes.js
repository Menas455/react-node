import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlogs, updateBlog } from '../controllers/Blog.js'
const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:id', getBlogs)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)


export default router

