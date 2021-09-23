"use strict";
/**
 * Interface for TS
 *
 * - TS의 interface : 여러타입의 속성으로 이루어진 새로운 타입을 정의하는 방법.
 * - interface를 사용하면 새로운 타입을 정의할 수 있게 되고, 타입체크가 가능해진다. (compile 시점에서 가능해짐)
 * - interfacef를 이용하면 변수, 함수, 클래스에 타입을 지정할 수 있다.
 */
let p1 = {
    x: 10,
    y: 20
};
//p1.x = 100; // (이거 불가능!!)
