// console.log('node-typescript-api')

import express from 'express'
import { apiGetPosts, apiGetPostsDetails } from './api/posts/apiGetPost'
 
const app = express()

app.get('/', (req, res, next) => {
    res.send('node tyscript api')
})

app.get('/post', apiGetPosts)

app.get('/post/:id', apiGetPostsDetails)

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening...')
})