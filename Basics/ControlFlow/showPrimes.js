
showPrimes(20);

function showPrimes(limit){
    for (let value = 1; value<=limit; value++)
        if(isPrime(value)) 
            console.log(value)
    }

function isPrime(number){
    for (let factor = 1; factor < number; factor++)
        if (number % factor ===0 && factor != 1)
            return false;
    return true;
    
}