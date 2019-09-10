"use strict";
// console.log('node-typescript-api')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res, next) => {
    res.send('node tyscript api');
});
app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening...');
});