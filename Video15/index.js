const jsx = (
    <React.Fragment>
        <h2>ReactJS</h2>
        <h2>NodeJS</h2>
    </React.Fragment>
);
console.log(jsx);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(jsx);