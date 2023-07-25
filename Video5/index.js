let name = 'Thu';
let age = 22;
const person1 = {
    name,
    age,
    getName() {
        return name;
    }
};
console.log(person1.getName());

let fieldName = 'name';
let fieldAge = 'age';
const person2 = {
    [fieldName]: 'Thu',
    [fieldAge]: 22,
}
console.log(person2);
