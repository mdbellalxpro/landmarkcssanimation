import express from "express";

import {
  getAllBlogs,
  getSingleBlog,
  likeBlog,
  addComment,
  viewBlog,
} from "../controllers/blogController.js";

const router = express.Router();

/* ===========================
GET ALL BLOGS
=========================== */

router.get("/", getAllBlogs);

/* ===========================
GET SINGLE BLOG
=========================== */

router.get("/:slug", getSingleBlog);

/* ===========================
LIKE BLOG
=========================== */

router.patch("/:slug/like", likeBlog);

/* ===========================
VIEW BLOG
=========================== */

router.patch("/:slug/view", viewBlog);

/* ===========================
ADD COMMENT
=========================== */

router.post("/:slug/comment", addComment);

export default router;