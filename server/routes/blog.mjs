import express from 'express';
import {
  getAllPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} from '../controllers/blog.mjs';

const router = express.Router();

router.route('/posts').get(getAllPosts).post(createPost);

router.route('/posts/:id').get(getPost).patch(updatePost).delete(deletePost);

export default router;
