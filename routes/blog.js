const express = require("express");
const router = express.Router();

// Import Controller
const {createComment} = require("../controllers/commentController");
const {createPost,getAllPosts} = require("../controllers/postController");

// Mapping Create
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);

// export

module.exports = router;