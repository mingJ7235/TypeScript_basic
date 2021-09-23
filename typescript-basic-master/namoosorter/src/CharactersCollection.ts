class CharatersCollection {
    constructor(private data : string) {

    }

    get length() : number {
        return this.data.length;
    }

    compare (leftIndex : number, rightIndex : number) :boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap (leftIndex : number, rightIndex : number) : void {
        const characters = this.data.split(''); //문자 배열로 변경
        const temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join(''); //다시 문자열로 조합
    }
}

export default CharatersCollection;