//He redeclarado levemente las variables para que no me salten los errores de VSC

/* 3.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users1 = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];

const userNames1 = users1.map(user1 => user1.name);
console.log(userNames1);

/* 3.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
const users2 = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];

const userNames2 = users2.map(user2 => {
    return user2.name.startsWith('A') ? 'Anacleto' : user2.name;
});

console.log(userNames2);

/* 3.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string '(Visitado)' 
cuando el valor de la propiedad isVisited = true.*/
const cities = [
	{isVisited: true, name: 'Tokyo'}, 
	{isVisited: false, name: 'Madagascar'},
	{isVisited: true, name: 'Amsterdam'}, 
	{isVisited: false, name: 'Seul'}
];

const cityNames = cities.map(city => {
    return city.isVisited === true ? city.name + " (Visitado)" : city.name;
})

console.log(cityNames);
