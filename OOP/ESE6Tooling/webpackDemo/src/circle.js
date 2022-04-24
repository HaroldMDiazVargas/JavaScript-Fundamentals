const _radius = new WeakMap();

//Public interface
export class Circle{
    constructor(radius){
        _radius.set(this,radius);
    }

    draw(){
        console.log('circle with radius '+_radius.get(this));
    }
}
