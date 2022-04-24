//Implementation Detail (Abstraction)
const _radius = new WeakMap();

//Public interface
class Circle{
    constructor(radius){
        _radius.set(this,radius);
    }

    draw(){
        console.log('circle with radius '+_radius.get(this));
    }
}


module.exports = Circle;
// module.exports.Circle = Circle;
// module.exports.Square = Square;

//module -> keyword, current object
//exports -> property => Object
//Add properties to Object exports : Circle