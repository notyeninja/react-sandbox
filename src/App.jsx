import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Mittens" breed="Maine Coon" animal="cat" />
      <Pet name="Tweety" breed="Budgerigar" animal="parrot" />
      <Pet name="Bella" breed="Labrador Retriever" animal="dog" />
    </div>
  );
};

const container = document.getElementById("root");
const appRoot = createRoot(container);
appRoot.render(<App />);
