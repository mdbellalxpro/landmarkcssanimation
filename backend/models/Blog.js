import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    excerpt: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    tags: [
      {
        type: String,
      },
    ],

    // ❤️ Total Likes
    likes: {
      type: Number,
      default: 0,
    },

    // 👁 Total Views
    views: {
      type: Number,
      default: 0,
    },

    // ⏱ Reading Time
    readingTime: {
      type: Number,
      default: 5,
    },

    // 💬 Comments
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);