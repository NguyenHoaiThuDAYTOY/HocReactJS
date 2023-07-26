//VD3
// const txt = "Học ReactJS từ cơ bản tới nâng cao"
// const divReact = <div className="post-item">
//     <h2 title="Học ReactJS">ReactJS</h2>
//     <p>{txt}</p>
// </div>
// console.log(divReact);

// const container = document.querySelector('#root');
// const root = ReactDOM.createRoot(container);
// root.render(divReact);

//Bài tập
const txt = "Học ReactJS từ cơ bản tới nâng cao"
const courses = [
    { name: 'JavaScript' },
    { name: 'ReactJS' },
    { name: 'NodeJS' },
    { name: 'PHP' },
    { name: 'Python' },
]
const divReact = <div className="post-item">
    <h2 title="Học ReactJS">{txt}</h2>
    {courses.map((course, index) => (
        <p key={course.name}>{course.name}</p>
    ))}
    <p></p>
</div>
console.log(divReact);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(divReact);