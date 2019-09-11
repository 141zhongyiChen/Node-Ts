import { Todo } from './todo'
import { PostSummary } from './postSummary'

export class PostDetails extends PostSummary {

    todos: Todo;

    constructor(postData: any, todoData: any) {
        super(postData);
        this.todos = todoData.map((item:any) => new Todo(item))
    }
}