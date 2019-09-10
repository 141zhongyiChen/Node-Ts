"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiGetPosts = (req, res, next) => {
    res.json(data_1.DataStore.posts);
};
exports.apiGetPostsDetails = (req, res, next) => {
    res.send(req.params.id);
};
