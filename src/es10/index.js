//Profundidad
let array = [1, 2, 3, 4, 5, [1, 2, 3, 4, [1, 2, 3,]]];
console.log(array.flat(0)); //(6) [1, 2, 3, 4, 5, Array(5)]
console.log(array.flat(1)); //(10) [1, 2, 3, 4, 5, 1, 2, 3, 4, Array(3)]
console.log(array.flat(2)); //(12) [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3]

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar
let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2])); //[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

//----------------trim---------------------------/
let hello1 = '                      hello world';
console.log(hello1);
console.log(hello1.trimStart()); // inicio

let hello2 = 'hello world                  ';
console.log(hello2);
console.log(hello2.trimEnd()); // final

//-------------optional catch biding-------------/
try {
    //...
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries)); //{name: 'oscar', age: 32}

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description); //My Symbol

