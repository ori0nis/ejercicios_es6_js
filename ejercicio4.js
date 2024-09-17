//He redeclarado levemente las variables para que no me salten los errores de VSC

/* 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayores que 18 */
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const ages1Copy = ages1.filter(age => age > 18);


/* 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean pares. */
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const ages2Copy = ages2.filter(age => age % 2 === 0);


/* 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamers1Copy = streamers1.filter(streamer => streamer.gameMorePlayed === 'League of Legends');


/* 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamers2Copy = streamers2.filter(streamer => streamer.name.includes('u'));


/* 4.5 Utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el carácter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la función 
.includes() para la comprobación.

Además, pon el valor de la propiedad .gameMorePlayed a MAYÚSCULAS cuando 
.age sea mayor que 35. */

const streamers2Copy2 = streamers2.filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    if (streamer.age > 35) {
      return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
    }
    return streamer;
  });

