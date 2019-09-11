"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCreatePost = (req, res, next) => {
    console.log("Post is called");
    res.send(req.body);
};
