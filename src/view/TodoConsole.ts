import * as inquirer from 'inquirer';
import TodoItem from '../model/TodoItem';
import data from '../data';
import TodoCollections from '../service/TodoCollections';
import { Commands } from '../model/Commands';


class TodoConsole {
    private todoCollection : TodoCollections;

    constructor () {

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
        this.todoCollection.getTodoItems(true).forEach(
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
                if(answers["command"] !== Commands.Quit) {
                    this.promptUser();
                }
            }
        );
    }
}

export default TodoConsole;