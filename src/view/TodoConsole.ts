import * as inquirer from 'inquirer';
import TodoItem from '../model/TodoItem';
import data from '../data';
import TodoCollections from '../service/TodoCollections';
import { Commands } from '../model/Commands';


class TodoConsole {
    private todoCollection : TodoCollections;

    private showCompleted : boolean;

    constructor () {
        this.showCompleted = true;

        const sampleTodos : TodoItem[] = data.map(
            (item) => new TodoItem (item.id, item.task, item.complete)
        )

        this.todoCollection = new TodoCollections('My Todo List', sampleTodos);
    }

    displayTodoList () : void {
        console.log(
            `=====${this.todoCollection.userName}=====` + 
            `(${this.todoCollection.getItemCounts().incomplete} items todo)`
        )
        this.todoCollection
            .getTodoItems(this.showCompleted)
            .forEach(
                (item) => item.printDetails()
            );
    }

    promptUser () : void {
        console.clear();
        this.displayTodoList();

        inquirer
            .prompt({ //inquirer library 활용
                type : "list",
                name : "command",
                message : "Choose option",
                choices : Object.values(Commands)
        })
        .then(
            (answers) => {
                // if(answers["command"] !== Commands.Quit) {
                //     this.promptUser();
                // }
                switch (answers["command"]) {
                    case Commands.Toggle :
                        this.showCompleted = !this.showCompleted; //상태를 변경해줌 showCompleted의 변경을 여기서 해주는 것임. 
                        this.promptUser();
                        break;

                    case Commands.Add :
                        this.promptAdd();
                        break;

                    case Commands.Purge :
                        this.todoCollection.removeComplete (); //이미 만들어놓은 완료목록 삭제 
                        this.promptUser();
                        break;

                    case Commands.Complete :
                        if (this.todoCollection.getItemCounts().incomplete > 0) { //완료되지 않은 항목이 1개라도 있는 경우
                            this.promptComplete();
                        } else {
                            this.promptUser();
                        }
                        break;

                }
            }
        );
    }

    promptAdd () : void {
        console.clear();
        inquirer.prompt({
            type : "input",
            name : "add",
            message : "Enter task :"
        })
        .then (
            (answers) => {
                if (answers["add"] !== "") {
                    this.todoCollection.addTodo(answers["add"]);
                }
                this.promptUser();
            }
        )
    }

    promptComplete () : void {
        console.clear();
        inquirer.prompt({
            type : "checkbox",
            name : "complete",
            message : "Mark Tasks Complete",
            choices : this.todoCollection.getTodoItems(this.showCompleted).map(
                (item) => ({
                    name : item.task, 
                    value : item.id, //value로 비교
                    checked : item.complete
                })
            )
        })
        .then (
            (answers) => {
                let completedTasks = answers["complete"] as number[]; //Assertion. number의 배열타입으로 단언한다! 라는 의미임. 어서션. 엘리아스가 아니다. TS의 어서션! 
                this.todoCollection.getTodoItems(true).forEach(
                    (item) => this.todoCollection.markComplete(
                        item.id,
                        completedTasks.find((id) => id === item.id) != undefined
                    )
                )
                this.promptUser();
            }
        )       
    }
}

export default TodoConsole;