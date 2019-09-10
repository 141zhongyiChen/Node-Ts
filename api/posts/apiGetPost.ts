import { RequestHandler } from 'express'
import { DataStore }  from '../../data/data'

export const apiGetPosts: RequestHandler = (req, res, next) => {
    res.json(DataStore.posts)
}

export const apiGetPostsDetails: RequestHandler = (req, res, next) => {
    res.send(req.params.id)
}