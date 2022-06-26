const data = {
    fronted: "Nar",
    backed: "Eber",
    design: "Koga",
};

//Object.entries
const entries = Object.entries(data);
console.log(entries);
//Object.values
const values = Object.values(data);
console.log(values);
console.log(values.length);
//Object.key
const keys = Object.keys(data);
console.log(keys);
console.log(keys.length);

//padStart
console.log('food'.padStart(8,'Good'));
//padEnd
console.log('food'.padEnd(8,'Good'));