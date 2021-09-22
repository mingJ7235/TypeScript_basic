"use strict";
/**
 * TS란 무엇인가.
 *
 * - TS는 ms에서 개발한 언어
 * - 안전하고 예측가능한 코드 구현에 초점을 맞춘 JS의 상위집합 언어다. (Superset)
 * - JS에 Type System을 적용한 언어다.
 * - TS로 작성된 코드는 TS컴파일러 (tsc)를 통해 JS로 변환되고, 이후 실행이된다.
 *
 * - JS는 타입에 대한 제약이 느슨한 언어다. Dynamic type
 *      -> 프로그램의 유연성을 보장을 하지만, 예측불가능하기도하고 안전한코드를 구현하는데 어려움이 있다.
 *      -> 어떤 타입의 값이 들어있는지 직접 꺼내서 검사하지 않는한 알수 없다.
 *
 * TypeScript = JS + Type System
 *
 * TS는 변수 파라미터, 그리고 function 의 return 값에 타입을 지정할 수 있다.
 * + JS의 고유한 유연성도 해치지 않는 범위에서 사용함.
 *
 *
 * void 타입 -> type script 에서 들어온 타입.
 *
 * 타입스크립트는 static 타입을 지원.
 *
 * 타입이 다른 값을 대입하거나, 전달 인자로 전달하면 컴파일 에러가 난다.
 *
 * let year : number = 2020;
 */
let year = 2020; //type annotation 
function sumNumbers(num1, num2) {
    return num1 + num2;
}
/**
 * 타입 추론 : Type Inference
 *
 * - TS 에서 타입을 명시하지 않고, 대입되는 값을 통해서 변수에 타입을 유추하여 결정하는 것을 Type Inference (타입추론) 이라고한다.
 * - 기본적으로 변수의 선언과 함께 값을 대입하는 경우 해당 변수는 타입 추론으로 인해 대입되는 값의 타입을 갖는다.
 * - 변수를 선언하고 같은 코드 라인에서 트겆ㅇ 값을 대입하면, TS는 대입값의 타입을 유추하여 변수의 타입을 확정한다.
 * - 변수의 선언과 값의 대입을 다른 코드 라인에서 진행하면 해당 변수는 any 타입의 변수가 된다.
 *
 * - 직접적으로 타입을 선언하지 않는 방식을 타입 추론이라고 한다.
 *
 */
let lastname = 'kim'; // let lastname : string
let othername; //let othername : any // any 타입은 어떤 값이든 담을 수 있는 변수다 라는 의미다. 즉, JS의 변수처럼 어떠한 데이터 형식을 답을 수 있는 변수가됨. 
othername = 'kim';
