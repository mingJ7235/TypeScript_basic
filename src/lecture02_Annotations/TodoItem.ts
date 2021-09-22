class TodoItem {
    // public id : number; //접근제어자를 줄 수 있다. public, private, protected 사용가능. 
    // public task : string;
    // public complete : boolean;

    constructor(public id : number, public task : string, public complete : boolean) { //파라미터에 접근 제어자를 지정해주면, property 로 인식하기 때문에, 위에서 따로 지정해줄 필요가 없다. 
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    printDetails () : void { //함수의 리턴값에 대한 지정. void는 return 값이 없을 때 이렇게 타입을 지정해준다. 
        console.log(
            `${this.id}\t${this.task}\t${this.complete ? '\t(complete)' : ''}`
        );
    }
}

export default TodoItem; //외부에서 사용할 수 있도록 exporting 

/**
 * 
 */