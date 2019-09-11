import { RequestHandler } from 'express'
import { DataStore }  from '../../data/data'
import { PostSummary } from '../../model/postSummary'

export const apiGetPosts: RequestHandler = (req, res, next) => {
    res.json(DataStore.posts.map((item: any) => new PostSummary(item)))
}
