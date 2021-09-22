"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
class TodoCollections {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map(); //사용할수있도록 instance화
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++; // id가 있다면 다음 id로 증가시켜줘야한다. while구문이어야 getTodoById의 return인 find에서 돌면서 찾는다.
        }
        this.itemMap.set(this.nextId, new TodoItem_1.default(this.nextId, task));
        return this.nextId;
    }
    //includeComplete -> true : 모든 할일 목록 반환 
    //includeComplete -> false : 완료 목록은 제외한 할일 목록 반환
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()] // ...은 전개 연산자. 배열에 전개하여 map 의 모든 요소들이 배열로 변환됨
            .filter(//컬랙션에있는걸 모두 순환한다. 순회하면서 조건에 맞는 것들만 배열로 리턴해준다.
        (item) => includeComplete || !item.complete // item.complete은 할일의 true, false 여부임. 즉, 필터링하는것임. 
        //if, else로 includeComplete로 짤수도 있지만, 이렇게 순환하여 하는 방법도있다. 개똑독
        );
    }
    //완료한 todo list에 대해서 삭제 
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = TodoCollections;
