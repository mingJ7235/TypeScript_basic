class TodoItem {
    constructor(
        public id : number, 
        public task : string, 
        public complete : boolean =false //default 로 false를 넣어줌 
    ) { //파라미터에 접근 제어자를 지정해주면, property 로 인식하기 때문에, 위에서 따로 지정해줄 필요가 없다. 
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
 * Functions
 * 
 * - 람다함수
 */

const add: (n1:number, n2: number) => number = (n1:number, n2:number) : number => { //람다함수... 
    return n1 + n2;

}


/**
 * JS는 기본적으로 가변인자를 통해 함수 호출이 가능했다.
 *  - 즉, 파라미터의 개수와 타입이 달라도 동일하게 호출이 가능하다.
 * 
 * TS는 가변인자를 지원하지 않는다.
 *  -즉, function 에 선언한대로 파라미터 개수와 타입을 동일하게 보내야한다.
 *  - 오버로딩을 통해 가변인자와 같은 효과를 구현할 수 있다. 
 */

//오버로딩 !! 
function addFun (firstParam : string, secondParam : string) : string;
function addFun (firstParam : number, secondParam : number) : number;

function addFun (firstParam : any, secondParam : any) : any {
    console.log(firstParam + secondParam);
}
