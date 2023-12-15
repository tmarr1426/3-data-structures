class Circle {
    constructor (radius) {
        this.cRadius = radius;
    }
    
    getArea(){
        return (Math.PI*(this.cRadius*this.cRadius)).toFixed(2);
    }
    getCircumference(){
        return (2*Math.PI*this.cRadius).toFixed(2);
    }
}

let circle1 = new Circle(2);
let circle2 = new Circle(5);

console.log(circle1.getArea());
console.log(circle1.getCircumference());
console.log(circle2.getArea());
console.log(circle2.getCircumference());