const Pet = (prop) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, prop.name),
    React.createElement("h2", {}, prop.animal),
    React.createElement("h2", {}, prop.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Canelito",
      animal: "Cat",
      breed: "furCat",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
