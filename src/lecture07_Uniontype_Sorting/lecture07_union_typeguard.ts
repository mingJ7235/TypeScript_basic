/**
 * Union Type
 * 
 * - TS는 타입들의 조합을 통해 새로운 타입을 정의할 수있다. 
 * - Union Type은 타입 선언에 하나 이상의 타입을 지정하고 해당 타입 중에 하나일 수 있음을 나타냄
 * - | (union operator) 연산자를 이용하여 정의한다. 
 * - 유니온타입의 멤버 사용은 정의된 모든 타입의 공통적인 멤버들만 사용할 수 있다. 
 * 
 */


/**
 * Type Guard
 * 
 * - Type Guard는 특정 영역 안에서 해당 변수의 타입을 한정시켜주는 기능이다. 
 *      즉, 특정영역에서 그 변수가 고유한 타입의 고유 멤버를 사용할 수 있도록 하는것. 
 * - Union Type의 정의는 각 타입이 갖는 고유 멤버는 사용할 수 없다.
 * - 특정 영역에서 각 타입이 갖는 고유 멤버에 대한 사용은 Type Guard를 이용한다. 
 * 
 * - Type Guard는 사용자가 정의하거나 number, string, boolean, symbol의경우는 typeof 연산자를 사용하여 만들어준다. 
 *      ex) if (typeof collection === 'string') {
 *              colleciton.split(';'); 
 *          }
 */

let collection : number[] | string = "1234,234"

if( typeof collection === 'string') {
    collection.split (',');
}
