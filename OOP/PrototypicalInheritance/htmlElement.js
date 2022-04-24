



function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    };
}


HtmlElement.prototype.focus = function(){
    console.log('focused');
};

function HtmlSelectElement(items = []){
    this.items = items;
    this.addItem = function(item){
        this.items.push(item);
    };

    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item),1)[0];
    };
}

HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
const html1 = new HtmlElement();
const htmlSelect = new HtmlSelectElement(1,2,3);
