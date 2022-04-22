 const car = {
    color:'red',
    speed:70,
    isStart: false,
    brand: 'chevrolet'
 }

 showProperties(car);
function showProperties(obj){
    for (let key in obj){
        if(typeof obj[key] === 'string') 
            console.log(key, obj[key]);
    }
}
