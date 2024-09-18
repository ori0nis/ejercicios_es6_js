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

const eachExamScore = exams.map(exam => exam.score);
console.log(eachExamScore);

const examScores = eachExamScore.reduce((acc, eachExamScore) => acc + eachExamScore, 0);
console.log(examScores);

//Simplificado (esto es lo primero que había hecho, pero no me daba porque en lugar de exam ponía exam.score en el curr):

const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log(totalScore);


/* 6.2 Dado el mismo array, haz una suma de todas las notas de los exámenes de los 
alumnos que estén aprobados usando la función .reduce(). */

const studentsThatPassed = exams.reduce((acc, exam) => {
    if (exam.score >= 5) {
        return acc + exam.score;
    }
    return acc;
}, 0);

console.log(studentsThatPassed);


/* 6.3 Dado el mismo array, haz la media de las notas de todos los exámenes usando .reduce(). */

const totalAverage = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log(totalAverage);
