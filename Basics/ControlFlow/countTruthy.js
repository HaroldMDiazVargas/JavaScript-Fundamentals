const array = [2,0,true,'','abc',false,null, undefined];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for (let value of array)
        if(value)
            count++;
    return count;
}