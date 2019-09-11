// console.log('node-typescript-api')

import express from 'express'
import bodyParser from 'body-parser'
import { apiGetPosts } from './api/posts/apiGetPost'
import { apiGetPostsDetails } from './api/posts/apiGetPostDetails'
import { apiCreatePost } from './api/posts/apiCreatePost'
 
const app = express()

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.send('node tyscript api')
})

app.get('/post', apiGetPosts)

app.get('/post/:id', apiGetPostsDetails)

app.post('/posts', urlencodedParser, jsonParser, apiCreatePost)

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening...')
})