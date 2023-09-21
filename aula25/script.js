//Pegando os elementos HTML

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(Element => {
    console.log(Element)
});

console.log(objs1);
console.log(objs2);




//Operador Spread

const soma = (v1,v2,v3)=>{
    return v1+v2+v3;
}

let valores =[1,5,4,10];

console.log(soma(...valores));


//-----------------------------------------
const jogador1 = {nome:"Yan", vida:"100",folego:"40%"};
const jogador2 = {nome:"Joel", vida:"100",folego:"30%"};
const jogador3 = {...jogador1,...jogador2};

console.log(jogador3);

//----------------------------------------
let n1 = [10,20,30];

let n2 = [11,12,13,14,15];

let n3 = [n1,n2];

//console.log("n1 " + n1);
//console.log("n2 " + n2);
console.log("n3 " + n3);
