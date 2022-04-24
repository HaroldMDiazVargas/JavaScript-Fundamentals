
_count = new WeakMap();
_items = new WeakMap();

class Stack{
    constructor(){
        // _count.set(this,0);
        _items.set(this,[]);
    }
    
    get count(){
        return _items.get(this).length;
    }   

    push(item){
        _items.get(this).push(item);
    }

    pop(){
        const items = _items.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        return items .pop();
    }

    peek(){
        const items = _items.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        return  items[items.length-1];
    }
}

