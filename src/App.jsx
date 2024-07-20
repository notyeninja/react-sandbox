import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPets from "./SearchPets";
import PetDetails from "./PetDetails";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<PetDetails />} />
        <Route path="/" element={<SearchPets />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const appRoot = createRoot(container);
appRoot.render(<App />);
