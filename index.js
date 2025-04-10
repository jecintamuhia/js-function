function StringLengths(strings) {
    return strings.map(str => str.length);
}

function filterEvenNum(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
function getTopStudents(students) {
    return students
        .filter(student => student.score > 75)
        .map(student => student.name);
}

function squareNum(numbers) {
    return numbers.map(num => num * num);
}

function filterUppercaseStrings(mixedArray) {
    return mixedArray
        .filter(item => typeof item === 'string')
        .map(str => str.toUpperCase());
}

const strings = ["Jecinta", "Mapping"];
console.log(StringLengths(strings)); 

const numbers = [8, 4, 3, 4, 5, 6];
console.log(filterEvenNum(numbers)); 

const students = [
    { name: "Jess", score: 78},
    { name: "Qrfar", score: 80 },
    { name: "Kerren", score: 89}
];
console.log(getTopStudents(students));

const nums = [1, 2, 3, 4];
console.log(squareNum(nums)); 

const mixed = [1, "hello", true, "world", null];
console.log(filterUppercaseStrings(mixed)); 

