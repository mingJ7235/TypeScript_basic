
/**
 * 
 * Interface와 Class
 * 
 * - 클래스는 implements 키워드를 통해 인터페이스를 구현할 수 있다. 
 * - 인터페이스를 구현한 클래스를 인터페이스에 정의된 추상메소드를 구현해야한다. 
 * - 인터페이스끼리 서로 상속이 가능하다. (extends)
 * - 하나의 클래스는 다수의 인터페이스를 implements 할 수 있다. 
 * - 특정 인터페이스에서 정의한 프로퍼티나 메서드를 갖고 있는 클래스는 해당 인터페이스를 구현한 것으로 인정하며 이를 덕타이핑(duck typing)이라고 한다. 
 *                          -> 실제로 implements를 하고 있지 않아도, 프로퍼티와 메소드를 가지고 있다면, 구현한 것으로 인정한다. 
 *                          -> 매우 신기한 개념. 덕타이핑 
 * - 덕타이핑 중요! 
 */

interface IBhavior {
    play () : void;
}

class Soccer implements IBhavior {
    play() {
        console.log ('Play soccer');
    }
}

class Guitar implements IBhavior {
    play() {
        console.log('Play the guitar')
    }
}

let test = new Guitar();
test.play ();
test = new Soccer();
test.play ();