let storeUSD = [5, 6, 7, 8];

function toEuros(value){
    value *= 0.85;
    return value;
}

let storeEUR = storeUSD.map(toEuros);
console.log(storeUSD);
console.log(storeEUR);