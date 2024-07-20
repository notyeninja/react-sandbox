import { useEffect, useState } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "dog", "rabbit"];

const SearchPet = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  const breed = "";

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    //const res = await fetch(`http://localhost:3000/pets`);
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

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

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          breed={pet.breed}
          animal={pet.animal}
          key={pet.id}
        ></Pet>
      ))}
    </div>
  );
};

export default SearchPet;
