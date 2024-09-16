//He redeclarado levemente las variables para que no me salten los errores de VSC

// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsList1copy = [...pointsList1];

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy1copy = {...toy1}

/* 2.3 Dados los siguientes arrays, crea un nuevo array juntándolos usando 
spread operators. */
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];
const totalPoints = [...pointsList2, ...pointsList3]

/* 2.4 Dados los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toys = {...toy2, ...toyUpdate}

/* 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)]