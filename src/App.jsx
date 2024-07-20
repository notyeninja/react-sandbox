import React from "react";
import { createRoot } from "react-dom/client";
import SearchPet from "./SearchPets";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchPet></SearchPet>
    </div>
  );
};

const container = document.getElementById("root");
const appRoot = createRoot(container);
appRoot.render(<App />);
