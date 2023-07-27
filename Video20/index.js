//Custom Button
function Button({ children }) {
    return (
        <button>{children}</button>
    )
}

//Spread & Rest props
function Input({ label, ...inputProps }) {
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    )
}

//Render props
function List({ data, children }) {
    return (
        <ul>
            {data.map((...props) => children(...props))}
        </ul>
    )
}

//App.js
function App() {
    const cars = ['Honda', 'Yamaha', 'Suzuki'];
    return (
        <React.Fragment>
            <List data={cars}>
                {(item, index) => <li key={index}>{item}</li>}
            </List>
            <Button>Children Prop</Button>
            <Button
            // title="Click"//string literals
            />
            <Button
                default
            // title={"Click me"}//expression
            />
            <Input
                label={"Input"}
            />
            <Input
                label={"Checkbox"}
                type="checkbox"
            />
        </React.Fragment>
    )
}

//index.js
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);