"use strict";
// console.log('node-typescript-api')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const apiGetPost_1 = require("./api/posts/apiGetPost");
const apiGetPostDetails_1 = require("./api/posts/apiGetPostDetails");
const apiCreatePost_1 = require("./api/posts/apiCreatePost");
const app = express_1.default();
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const jsonParser = body_parser_1.default.json();
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.get('/', (req, res, next) => {
    res.send('node tyscript api');
});
app.get('/post', apiGetPost_1.apiGetPosts);
app.get('/post/:id', apiGetPostDetails_1.apiGetPostsDetails);
app.post('/posts', urlencodedParser, jsonParser, apiCreatePost_1.apiCreatePost);
app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening...');
});
