
const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
    ]);
};


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {}, null),
            React.createElement(Pet, {}, null),
            React.createElement(Pet, {}, null)
        ]
    )
};

const container = document.getElementById('root');
const appRoot = ReactDOM.createRoot(container);
appRoot.render(React.createElement(App));