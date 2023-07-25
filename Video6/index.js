let arr1 = [1, 2, 3, 4];
let arr2 = ['Hoai', 'Thu'];
let arr3 = [...arr1, ...arr2];//nối arr1 và arr2
console.log(arr3);

let obj1 = {
    name: 'Thu',
    age: 22,
}
let obj2 = {
    name: 'Hoai',
    address: 'Ha Noi',
}
let obj3 = { ...obj1, ...obj2 }
console.log(obj3);