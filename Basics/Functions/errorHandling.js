
try {
    const numbers = [1,2,3,4,1,1];
    const count = countOcurrences(true,1);
    console.log(count);
    
} catch (e) {
    console.log(e.message);
    
}

function countOcurrences(array, searchElement){
    if (!Array.isArray(array)) 
        throw new Error('Invalid array.');
    return array.reduce((accumulator,currentValue) => {
        return (currentValue === searchElement)? ++accumulator:accumulator;
    },0);
}
