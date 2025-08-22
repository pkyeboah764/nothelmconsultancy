import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A blog post must have a title'],
      trim: true,
      unique: true,
      lower: true,
    },
    date: {
      type: String,
      required: [true, 'A blog post must have a date'],
    },
    featuredImage: {
      type: String,
      required: [true, 'A blog post must have a featured image'],
    },
    content: {
      type: String,
      required: [true, 'A blog post must have some content'],
    },
    summary: {
      type: String,
      required: [true, 'A blog post must have a summary'],
    },

    category: {
      type: String,
      required: [true, 'A blog post must have a category'],
    },
  },
  {
    timestamps: true,
  },
);

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
