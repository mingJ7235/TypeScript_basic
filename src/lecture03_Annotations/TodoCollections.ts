import TodoItem from "./TodoItem";


class TodoCollections{
    private nextId : number = 1;

    constructor (public userName : string,public todoItems : TodoItem[] = []) {}

    getTodoById (id : number) : TodoItem | undefined { // return 타입을 이렇게 or로 해줄 수 도 있다. 
        return this.todoItems.find( (item) => item.id === id );
    }

    addTodo (task : string) : number {
        while(this.getTodoById(this.nextId)) {
            this.nextId ++; // id가 있다면 다음 id로 증가시켜줘야한다. while구문이어야 getTodoById의 return인 find에서 돌면서 찾는다.
        }
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }

    markComplete(id : number, complete : boolean) : void {
        const todoItem = this.getTodoById(id);
        if(todoItem) {
            todoItem.complete = complete;
        }
    }
}

export default TodoCollections;