/**
 * Interface for TS
 * 
 * - TS의 interface : 여러타입의 속성으로 이루어진 새로운 타입을 정의하는 방법. 
 * - interface를 사용하면 새로운 타입을 정의할 수 있게 되고, 타입체크가 가능해진다. (compile 시점에서 가능해짐)
 * - interfacef를 이용하면 변수, 함수, 클래스에 타입을 지정할 수 있다. 
 */

/**
 * Optional property, readonly property 
 * 
 * - 인터페이스의 프로퍼티는 선택적 옵션과 읽기 전용 옵션을 지정할 수 있다. 
 * - 인터페이스에 정의하는 모든 프로퍼티가 필수 요소가 아닌경우 ? (물음포)를 지정하여 선택적 프로퍼티로 지정할 수 있다. => optional property
 * - 인터페이스에 정의하는 특정 프로퍼티에 대해 readonly를 지정하여 상수처럼 사용할 수 있다.
 */

 interface Shape {
     p1 : number[],
     p2 : number[],
     area? : number; //optional property
 }

 interface Point {
     readonly x : number; //상수화 하여 사용하는 방법 readonly 
     readonly y : number;
 }

 let p1 : Point = {
     x : 10,
     y : 20
 }

 //p1.x = 100; // (이거 불가능!!)