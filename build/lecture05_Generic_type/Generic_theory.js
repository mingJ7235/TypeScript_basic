"use strict";
/**
 * Generic
 * - 재사용 가능한 클래스, 함수를 만들기 위해 다양한 타입에서 사용가능하도록 하는 제네릭.
 * - 제네릭을 이용하면 모든 타입의 객체를 다루면서, 객체 타입의 무결성을 유지할 수 있다.
 * - 제네릭을 통해 클래스나 함수 내부에서 사용되는 특정 데이터의타입을 외부!!에서 지정한다.
 * - 제네릭이 적용된 대상 (클래스, 함수, 인터페이스)는 선언 시점이 아닌 생성 시점에 사용하는 타입을 결정한다.
 *
 * - 타입 파라미터는 상속을 통해 특정 타입의 하위 타입으로 제한 할 수 있다 ex>  <? extends Fruit> 이런식 !! 아하!! 즉, 이때는 Fruit을 상속한 하위 클래스만 오라고 지정하는 제네릭!!
 * - any 타입을 사용하면 제약이 생기므로 제네릭을 사용한다.
 */
//any 사용
// class Box {
//     constructor (private fruit : any = {}) {
//     }
//     getFruit () : any {
//         return this.fruit;
//     }
// }
//Generic type 사용 
class Box {
    constructor(fruit) {
        this.fruit = fruit;
    }
    getFruit() {
        return this.fruit;
    }
}
const testUser = { name: 'kim', age: 20 };
