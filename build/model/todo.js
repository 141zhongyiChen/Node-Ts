"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(data) {
        this.postId = data.postId;
        this.id = data.id;
        this.title = data.title;
        this.completed = data.completed;
    }
}
exports.Todo = Todo;
