export class Todo {
    postId: string;
    id: string;
    title: string;
    completed: string;
    constructor (data: any) {
        this.postId = data.postId;
        this.id = data.id;
        this.title = data.title;
        this.completed = data.completed;
    }
}