/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me debería de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me debería de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const userInput = document.querySelector("input");

userInput.addEventListener("input", () => {
    const streamersShown = streamers.filter(streamer => 
        streamer.name.toLowerCase().includes(userInput.value.toLowerCase()));
        console.log(streamersShown);
    });



