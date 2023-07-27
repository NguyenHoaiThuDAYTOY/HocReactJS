//App.js
function App() {
    const title = "Welcome";
    return (
        <React.Fragment>
            <button
                onClick={() =>
                    alert(`${title}`)
                }
            >
                Click
            </button>
        </React.Fragment>
    )
}

//index.js
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);