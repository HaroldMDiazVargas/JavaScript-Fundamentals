let address = {
    street: '45th Streeth',
    city: 'Pereira',
    zipCode: '661001',
}


function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);