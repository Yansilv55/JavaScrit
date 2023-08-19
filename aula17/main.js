const numbers = [1, 2, 3, 4, 5];

const numbersmultipliedBytwo = numbers.map(function(iten) {
    return iten * 2;

});

console.log(numbersmultipliedBytwo);

const idades = [8, 22, 40, 53, 12, 35]

const evenidades = idades.filter(function(idade) {
    return idade % 2 === 0
});

console.log(evenidades);

const sumOIdades = idades.reduce(function (idade, accumulator) {
    return accumulator + idade;
}, 0);

console.log(sumOIdades)