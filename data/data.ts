// Consider using '--resolveJsonModule' to import module with '.json' extension
// 在 tscconfig.json 添加 resolveJsonModule: true
import post from './post.json'
import todo from './todo.json'

export class DataStore {
    static posts = post;
    static todos = todo;
}