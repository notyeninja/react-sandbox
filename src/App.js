
const Pet = (prop) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, prop.animal),
        React.createElement("h2", {}, prop.name),
        React.createElement("h2", {}, prop.breed)
    ]);
};


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Bella",
                breed: "Labrador Retriever",
                animal: "dog"
            }, null),
            React.createElement(Pet, {
                name: "Whiskers",
                breed: "Siamese",
                animal: "cat"
            }, null),
            React.createElement(Pet, {
                name: "Tweety",
                breed: "Budgerigar",
                animal: "parrot"
            }, null),
            React.createElement(Pet, {
                name: "Mittens",
                breed: "Maine Coon",
                animal: "cat"
            }, null)
        ]
    )
};

const container = document.getElementById('root');
const appRoot = ReactDOM.createRoot(container);
appRoot.render(React.createElement(App));