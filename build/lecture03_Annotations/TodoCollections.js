"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
class TodoCollections {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    getTodoById(id) {
        return this.todoItems.find((item) => item.id === id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++; // id가 있다면 다음 id로 증가시켜줘야한다. while구문이어야 getTodoById의 return인 find에서 돌면서 찾는다.
        }
        this.todoItems.push(new TodoItem_1.default(this.nextId, task));
        return this.nextId;
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = TodoCollections;
