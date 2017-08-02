class Pointer {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `${this.x},${this.y}`;
    }
}
var pointer = new Pointer(2,5);
console.log(pointer.toString());

class ColorPointer extends Pointer{
    constructor(x,y,color){
        super(x,y);
        this.color = color;
    }
    toString(){
        // const a = super();
        return this.color + ' ' +super()
    }
}
const colorPointer = new ColorPointer(2,3,'red');
console.log('color',colorPointer.toString());