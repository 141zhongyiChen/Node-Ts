"use strict";
// console.log('node-typescript-api')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetPost_1 = require("./api/posts/apiGetPost");
const apiGetPostDetails_1 = require("./api/posts/apiGetPostDetails");
const app = express_1.default();
app.get('/', (req, res, next) => {
    res.send('node tyscript api');
});
app.get('/post', apiGetPost_1.apiGetPosts);
app.get('/post/:id', apiGetPostDetails_1.apiGetPostsDetails);
app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening...');
});
