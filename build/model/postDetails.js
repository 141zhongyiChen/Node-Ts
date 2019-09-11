"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const postSummary_1 = require("./postSummary");
class PostDetails extends postSummary_1.PostSummary {
    constructor(postData, todoData) {
        super(postData);
        this.todos = todoData.map((item) => new todo_1.Todo(item));
    }
}
exports.PostDetails = PostDetails;
