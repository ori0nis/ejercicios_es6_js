/* 6.1 Dado el siguiente array, haz una suma de todas las notas de los exámenes de 
los alumnos usando la función .reduce(). */

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'María Aranda Jiménez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedes Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benítez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const eachExam = exams.forEach((exam) => console.log(exam));

console.log(eachExam);


// const eachScore = exams.map(exam => exams.score);

// console.log(eachScore);

const examScores = exams.reduce((acc, eachScore) => acc + eachScore, 0);

console.log(examScores);


/* 6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce(). */

/* 6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */