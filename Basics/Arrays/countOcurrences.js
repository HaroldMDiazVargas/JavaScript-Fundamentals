const numbers = [1,2,3,4,1,1];

const count = countOcurrences(numbers,1);
console.log(count);



function countOcurrences(array, searchElement){

    return array.reduce((accumulator,currentValue) => {
        return (currentValue === searchElement)? ++accumulator:accumulator;
    },0)
}

