import { useState } from "react";

const ANIMALS = ["bird", "dog", "rabbit"];

const SearchPet = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  return (
    <div className="container">
      <form action="">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
        />
        <label htmlFor="animal" className="form-label">
          Animal
        </label>
        <select
          className="form-control"
          name="animal"
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed" className="form-label">
          Breed
        </label>
        <input id="breed" type="text" value="Breed" className="form-control" />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPet;
