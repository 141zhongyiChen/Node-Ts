"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
// import { PostSummary } from '../../model/postSummary'
const postDetails_1 = require("../../model/postDetails");
exports.apiGetPostsDetails = (req, res, next) => {
    const selectedPost = data_1.DataStore.posts.find((item) => req.params.id == item.id);
    if (selectedPost) {
        // res.json(new PostSummary(selectedPost))
        const selectedDetails = data_1.DataStore.todos.filter((item) => req.params.id == item.postId);
        res.json(new postDetails_1.PostDetails(selectedPost, selectedDetails));
    }
    else {
        res.status(404).json({ status: 'failed', msg: 'post not found' });
    }
};
