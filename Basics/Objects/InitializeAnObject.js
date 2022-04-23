// Factory Function

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

const address1 = createAddress('45th Streeth', 'Pereira','661001');
console.log(address1);



// Constructor Function

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('45th Streeth', 'Pereira','661001');
console.log(address2);

