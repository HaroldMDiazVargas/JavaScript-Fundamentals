const numbers = [1,2,3,4];

const output = move(numbers,2,1);

console.log(output);


function move(array, index, offset){
   
    const position = index+offset;

    if (position >= array.lenght || position < 0){
        console.error('Invalid offset');
        return;
    }
        
    const output = [...array];
    const element = output.splice(index,1)[0]; //element deleted on index pos
    output.splice(position,0,element);  //0-> no delete any element

    return output;

}



