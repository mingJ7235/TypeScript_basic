import TodoItem from "./lecture02_Annotations/TodoItem";

/**
 * tsc 명령으로 ts파일을 실행시키면 트랜스컴파일이 되면서 js 파일이 생성된다. 
 */
// console.log('hello typescript');
// console.log('test');

const data = [
    { id : 1, task : '장보기', complete : true},
    { id : 2, task : 'TS공부', complete : false},
    { id : 3, task : '데이트', complete : false}
];

console.log('My Todo List');

for(let i = 0; i < data.length ; i ++) {
    let todoItem = new TodoItem(data[i].id, data[i].task, data[i]. complete);
    todoItem.printDetails();
}