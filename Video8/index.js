// const h1 = document.querySelector('h1');
// console.dir(h1);
const h1 = document.createElement('h1');
h1.innerText = 'Hello';
document.body.appendChild(h1);

//get root
const root = document.querySelector('#root');
root.appendChild(h1);

//thêm id, class, ...
h1.id = 'heading';
h1.className = 'test';
//có 3 cách viết style
h1.style.color = 'red';
h1.style = 'background-color: blue';
Object.assign(h1.style, {
    fontSize: '10px',//viết theo camel case
})
