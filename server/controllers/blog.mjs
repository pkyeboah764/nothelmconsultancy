import BlogPost from '../models/blog.mjs';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = await BlogPost.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newPost,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      res.status(404).json({
        status: 'fail',
        message: 'No post found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};
