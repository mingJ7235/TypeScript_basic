/**
 * TS 정렬 연습
 * 
 * - bubble sort
 * 
 */

import NumbersCollection from "./NumbersColliction";


interface Sortable {
    
}

class NamooSorter {
    constructor(private collection : NumbersCollection) { //union type으로 변경 

    }

    get getCollection () {
        return this.collection;
    }

    sort () : void {

        const { length } = this.collection;

        for (let i = 0 ; i < length; i ++) {
            for (let j = 0 ; j < length -i -1 ; j++) {
                
                // if (typeof this.collection === 'string') {

                //     if(this.collection[j].toLowerCase() > this.collection[j+1].toLowerCase()) { //type guard
                //         const characters = this.collection.split('');
                //         const temp = characters[j
                //         characters[j] = characters[j+1];
                //         characters[j+1] = temp;
                //         this.collection = characters.join(''); //다시문자열로 붙여줌
                //     }

                // }
                // if (this.collection instanceof Array) { //type guard 를 활용하는 방법이 많다. 
                //                                         //typeof 에서는 Array를 거를 수 없다. 그렇기에 instanceof 를 사용해줘야한다. 
                //     if(this.collection[j] > this.collection[j + 1]) {//오름차순
                //         //swap -> bubble sort 
                //         const temp = this.collection[j];
                //         this.collection[j] = this.collection[j + 1];
                //         this.collection[j+1] = temp;
                //     }
                // }

                if (this.collection.compare(j, j+1)) {
                    this.collection.swap(j, j+1);
                }
            }
        }
        //return this.collection;
    }
}

export default NamooSorter;