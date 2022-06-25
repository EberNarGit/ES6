// Antes de ES6
function newFunction (name, age, country) {
	var name = name || 'Eber';
	var age = age || 23;
	var country = country || 'MX';
	console.log(name, age, country);
}

//ES6
function newFunction2 (name = 'Eber', age = 23, country = 'MX') {
	console.log(name, age, country);
}

newFunction2(); // 'Eber', 23, 'MX'
newFunction2('Maria', 23, 'MX');

// Antes de ES6
var hello = 'hello';
var world = 'world';
var phrase = hello + ' ' + world; //Hello world

// ES6
var phrase2 = `${hello} ${world}`; //Hello world