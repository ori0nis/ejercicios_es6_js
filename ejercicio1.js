/* 1.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprímelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year);

/* 1.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprímelo por consola. */

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

/* 1.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualándolo a la función e imprimiéndolo por consola. */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

// Comento el name para poder redeclararlo abajo

const {/*name,*/ race} = animalFunction();
// console.log(name);
console.log(race);


/* 1.4 En base al siguiente javascript, usa destructuring para crear las 
variables name e itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo está bien imprimiéndolo. */

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;
const [firstyear, secondyear, thirdyear] = itv;

console.log(name);
console.log(itv);
console.log(firstyear);
console.log(secondyear);
console.log(thirdyear);