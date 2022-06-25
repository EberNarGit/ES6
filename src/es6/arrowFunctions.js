//Objetos
let namme = 'eber';
let age1 = 23;
//antes de ES6
objeto1 = {name: namme, age1: age1};
// console.log(objeto1);
//despues de ES6
objeto2 = {namme, age1};
// console.log(objeto2);

//ArrowFunctions
const pets = [
    {
        name: 'Koga',
        age: 2
    },
    {
        name: 'Makoa',
        age: 5
    }
];
//antes de ES6
let listOfPets = pets.map(function (item) {
    console.log(item.name);
});
//despues de ES6
let listOfPets2 = pets.map(item => {
    let {name,age} = item;
    console.log(name, age);  
});
//Otra forma despues de ES6
// const listOfPets3 = (name, age) => {
    // ...
// }
//Otra forma despues de ES6
// const listOfPets4 = name => {
    // ...
// }
//Otra forma despues de ES6
// const square = num => num*num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('Ready');
        }else{
            reject('Ups!!')
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello'))
    .catch(error => console.log(error));