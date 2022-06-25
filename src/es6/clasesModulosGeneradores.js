//clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const cal = new calculator();
console.log(cal.sum(7,3)); //10

import hello from './module.js'; 

console.log(hello())

//Generadores
function* helloWorld() {
    if (true) {
        yield "hello my friend, ";
    }
    if (true) {
        yield "nice to meet you";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
