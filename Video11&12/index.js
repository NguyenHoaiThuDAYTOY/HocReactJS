//VD1
//DOM
const h1DOM = document.createElement('h1');
h1DOM.title = 'Header';
h1DOM.className = 'header-class';
h1DOM.innerText = 'Hello';
document.body.appendChild(h1DOM);
//React
const h1React = React.createElement('h1', {
    title: 'Header',
    className: 'header-class',
}, 'Hello');

console.dir(h1DOM);
console.log(h1React);

//VD2
//DOM
const ulDOM = document.createElement('ul');
const liDOM1 = document.createElement('li');
const liDOM2 = document.createElement('li');
liDOM1.innerText = 'Hello';
liDOM2.innerText = 'World';
ulDOM.appendChild(liDOM1);
ulDOM.appendChild(liDOM2);
document.body.appendChild(ulDOM);
//React
const ulReact = React.createElement('ul', null,
    React.createElement('li', null, 'Hello'),
    React.createElement('li', null, 'World')
);

console.dir(ulDOM);
console.log(ulReact);

//VD3
const divReact = React.createElement(
    'div',
    {
        className: 'post-item',
    },
    React.createElement('h2', { title: 'Học ReactJS' }, 'ReactJS'),
    React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao')
);
console.log(divReact);
//get root element
const root = document.querySelector('#root');
//React-DOM 
ReactDOM.render(divReact, root);

//Render React VD1
ReactDOM.render(h1React, root);

//Render React VD2
ReactDOM.render(ulReact, root);