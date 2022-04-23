

numbers = [1,2,3,4,5,6,1,2,3,9,-10,-20,20];
const max = getMax(numbers);
console.log(max);
function getMax(array){

    return array.reduce((accumulator,currentValue) => {
        return (currentValue > accumulator)? accumulator=currentValue:accumulator;
    },0);

}