//Array
let arr = [1, 2, 3, 4, 5, 6];
// let [a, b, c] = arr;
let [a, b, c, ...rest] = arr;
console.log(a, b, c, rest);

//Object
let obj = {
    name: 'Thu',
    age: 22,
    address: 'Ha Noi',
    other: 'other',
    job: {
        name: 'student',
    }
}
// let { name, age, ...rest1 } = obj;
// console.log(name, age, rest1);
let { name: nameObj, age, job: { name: nameJob } } = obj;
console.log(nameObj, age, nameJob);

//Rest in function
const logger = (...rest) => {
    console.log(rest);
}
logger(1, 2, 3, 4);

const showObj = ({ name, age, ...rest }) => {
    console.log(name);
    console.log(age);
    console.log(rest);
}
showObj({ name: 'Thu', age: 22, address: 'Ha Noi', other: 'other' });