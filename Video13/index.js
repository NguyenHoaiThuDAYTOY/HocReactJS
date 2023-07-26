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

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(divReact);