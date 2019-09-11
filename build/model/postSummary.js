"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostSummary {
    constructor(postData) {
        this.userId = postData.userId;
        this.id = postData.id;
        this.title = postData.title;
        this.body = postData.body;
    }
}
exports.PostSummary = PostSummary;
