const students = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //массив 12 студентов
const grades = students.map(() => {     //на основе массива стьюдентс формирую новый массив грейдс, используя метод мап
    return Math.floor(Math.random() * 100) 
});
console.log(grades);

 // Чтобы найти среднее арифметическое элементов массива, нужно сумму элементов массива разделить на длину массива

 const sum = grades.reduce(function (currentSum, currentNumber) {
    return Math.floor(currentSum + currentNumber/12)
}, 0);

console.log(sum);

console.log(`Max value: `, Math.max(...grades));

console.log(`Min value: `, Math.min(...grades));


const goodStudents = grades.filter(el => el>=60);

console.log(goodStudents.length);

const badStudents = grades.filter(el => el<=60);

console.log(badStudents.length);

const alphabetGrades = grades.map(item => {if (item > 80 && item < 100)
    return 'A';
    if (item > 60 && item < 79)
        return 'B';
    if (item > 40 && item < 59)
        return 'С';
    if (item > 20 && item < 39)
        return 'D';
    if (item < 20)
        return 'E';
});

console.log(alphabetGrades);