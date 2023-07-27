const Form = {
    Input() {
        return <input />
    },
    Checkbox() {
        return <input />
    }
}

//Custom Button
function Button({ title, href, onClick }) {
    let Component = 'button';
    const props = {};
    if (href) {
        Component = 'a';
        props.href = href;
    }
    if (onClick) {
        props.onClick = onClick;
    }
    return (
        <Component {...props}>{title}</Component>
    )
}

//App.js
function App({ title }) {
    const type = 'Input';
    const Component = Form[type];
    let firstAccess = true;
    return (
        <React.Fragment>
            {firstAccess && <h1>First Access</h1>}
            <h1>{title || 'title default'}</h1>
            <Component />
            <Form.Checkbox />
            <Button
                title="Click"
                onClick={() => alert('Hello!')}
                href={'https://www.youtube.com/watch?v=6qRyEeCDJ2g&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=22'}
            />
        </React.Fragment>
    )
}

//index.js
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App title="Welcome App" />);