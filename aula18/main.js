class person {
    constructor(firstName, lastName, age) {
        (this.firstName = firstName);
        (this.lastName = lastName);
        (this.age = age);
    }
}

const personobj = new person ("jane", "Doe", 40);
console.log(personobj);

class carro {
    constructor(pneu, cor, modelo) {
        (this.pneu = pneu);
        (this.cor = cor);
        (this.modelo = modelo);
    }
}

const carroobj = new carro ("pireli", "black", "Polo");
console.log(carroobj);

// Heranças

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} o animal faz algum barulho`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak(dog) {
        console.log(`${this.name} latiu`);
    }
}

const animal = new Animal("Simba");
const dog = new Dog("Pitucho");


animal.speak();
dog.speak();
