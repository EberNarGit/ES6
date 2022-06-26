//Operador de reposo
const obj = {
    nam: 'eber',
    age: 18,
    country: 'Mx',
};

let {nam, ...all} = obj;
//Podemos separar elementos
console.log(all);
//Podemos incluir elementos afuera del arreglo
console.log(nam, all);

//Operador de propagacion
const data = {
    pet: "dog",
    age: 2,
}

const data1 = {
    //union del objeto data con el objeto data1
    ...data,
    size: "small",
}
console.log(data1);

//Promise finally 
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('holass')
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then((response => console.log(response)))
    .catch((error) => console.log(error))
    .finally(() => console.log('Ya se acabo la promesa'))

//Regax
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
