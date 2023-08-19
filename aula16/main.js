const names = ["Yan", "Lívia", "Joel"];

const Lívia = names[1];

//adicionar um nome no final da lista

names.push("Filipe");

//adicionar um nome no começo da lista

names.unshift("Pedro");


console.log("Yan");

//serve para retirar nomes do final da lista

names.pop();
names.pop();

console.log(names);

names[2] = "Josa";

//serva procurar o index 

console.log(names.lastIndexOf('Yan'));

//serve para colocar em ordem alfabetica

const lastIndexOfPedro = names.indexOf("Pedro");

const sortdNames = names.sort();

console.log(sortdNames);

//para ver quantos intens a lista possui

console.log(names.length);

//serve para verificar se determinada variavel e uma lista

const namesIsArray = Array.isArray(lastIndexOfPedro);

console.log(namesIsArray);

