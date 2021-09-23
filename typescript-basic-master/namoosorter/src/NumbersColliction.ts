

class NumbersCollection {
    constructor(private data : number[]) {

    }

    get length () : number {
        return this.data.length;
    }

    compare(leftIndex : number, rightIndex : number) : boolean {
        return this.data[leftIndex] > this.data[rightIndex]; //오름차순 정렬할것임
    }

    swap(leftIndex : number, rightIndex : number) : void {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}

export default NumbersCollection;