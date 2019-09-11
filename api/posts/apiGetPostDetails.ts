import { RequestHandler } from 'express'
import { DataStore }  from '../../data/data'
// import { PostSummary } from '../../model/postSummary'
import { PostDetails } from '../../model/postDetails'

export const apiGetPostsDetails: RequestHandler = (req, res, next) => {
    const selectedPost = DataStore.posts.find((item: any) => req.params.id == item.id)
    
    if (selectedPost) {
        // res.json(new PostSummary(selectedPost))
        const selectedDetails = DataStore.todos.filter((item:any) => req.params.id == item.postId)
        res.json(new PostDetails(selectedPost, selectedDetails))
    } else {
        res.status(404).json({ status: 'failed', msg: 'post not found' })
    }
}