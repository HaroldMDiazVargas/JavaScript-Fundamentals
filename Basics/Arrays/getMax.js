

numbers = [1,2,3,4,5,6,1,2,3,9,-10,-20,20];
const max = getMax(numbers);
console.log(max);

function getMax(array){
    if (array.lenght === 0) return undefined;


    return array.reduce((a,b) => (a > b)? a:b);

}