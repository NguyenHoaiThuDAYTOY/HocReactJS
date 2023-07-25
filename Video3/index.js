const sum = (a, b) => {
    return a + b;
}
const sum2 = (a, b) => a + b;
const obj = (name, age) => ({ name: name, age: age });
console.log(obj('Thu', 22))
console.log(sum(1, 2));

//arrow function with obj
const person = {
    name: 'Thu',
    age: 22,
    getName: () => {
        return this.name;//context
    }
}
console.log(person.getName());//undefined

//arrow function with function constructor
const Data = (name, age) => {
    this.name = name;
    this.age = age;
}
const newData = new Data('Thu', 22);
console.log(newData);//error Uncaught TypeError: Data is not a constructor