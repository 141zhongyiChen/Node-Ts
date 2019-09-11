import { RequestHandler } from 'express'

export const apiCreatePost : RequestHandler = (req, res, next) => {
    console.log("Post is called")
    res.send(req.body)
}