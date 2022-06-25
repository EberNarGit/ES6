//Multilinea antes de ES6
let phrase = "Soy una frase que hace salto de linea \n"
+ "antes de ES6";
//Multilinea despues de ES6
let phrase2 = `Soy una frase que hace salto de linea 
despues de ES6`;
// console.log(phrase);
// console.log(phrase2);

//Desestructuración
let person = {
    name: 'Nar',
    age: 23,
    country: 'MX'
}
//antes de ES6
// console.log(person.name, person.age, person.country);
//despues de ES6
let {name,age,country} = person;
// console.log(name, age, country);

//Spread operator en ES6
let fruits = ['apple', 'orange', 'pineapple'];
let vegetables = ['tomato', 'lettuce', 'potato'];
let food = ['meat', ...fruits, ...vegetables];
// console.log(food);

