//Condições
const sum = 1 + 4;

if (sum === 2) {
    console.log("sum is 2!")
} else if(sum === 3) {
    console.log("sum is 3!")
} else {
    console.log("sum is not 2!")
}

// && verificar todas condições
// || verificar apenas uma condição

const sum1 = 2 + 2;
const sum2 = 3 + 10;

if (sum1 === 4 && sum2 === 6) {
    console.log("sum1 is 4 or sum2 is 6!")
}

if (sum1 === 4 || sum2 === 6) {
    console.log("sum1 is 4 or sum2 is 6!")
}
// Esses dois são a mesma coisa
let number = sum === 2 ? 2 : 4;

if (sum === 2) {
    number = 2;
} else {
    number = 4;
}


const car = 'Tesla';

switch (car) {
   case 'FIAT':
    console.log('FIAT é resistente!')
    break;
   case 'BMW':
    console.log('BMW é muito linda!')
    break;
   case 'Tesla':
    console.log("tesla é revolucionário!")
    break;

    default:
        car = 'não encontramos em nosso sistema'
}