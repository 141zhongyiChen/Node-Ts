export class PostSummary{
    userId: string;
    id: string;
    title: string;
    body: string;
    constructor(postData: any)
    {
        this.userId = postData.userId;
        this.id = postData.id;
        this.title = postData.title;
        this.body = postData.body;
    }
}