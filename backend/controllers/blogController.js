import Blog from "../models/Blog.js";

/* ======================================================
GET ALL BLOGS
GET /api/blogs
====================================================== */

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
GET SINGLE BLOG
GET /api/blogs/:slug
====================================================== */

export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
LIKE BLOG
PATCH /api/blogs/:slug/like
====================================================== */

export const likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.likes += 1;

    await blog.save();

    res.status(200).json({
      success: true,
      likes: blog.likes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
ADD COMMENT
POST /api/blogs/:slug/comment
====================================================== */

export const addComment = async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({
        success: false,
        message: "Name and Message are required",
      });
    }

    const blog = await Blog.findOne({
      slug: req.params.slug,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.comments.unshift({
      name,
      message,
    });

    await blog.save();

    res.status(201).json({
      success: true,
      comments: blog.comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/* ======================================================
VIEW BLOG
PATCH /api/blogs/:slug/view
====================================================== */

export const viewBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.views += 1;

    await blog.save();

    res.status(200).json({
      success: true,
      views: blog.views,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};