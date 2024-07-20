import { useEffect, useState } from "react";
import PetSearchResult from "./PetSearchResult";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "dog", "rabbit"];

const SearchPet = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [breed, setBreed] = useState("");

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
      <div className="row">
        <div className="col-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              requestPets();
            }}
          >
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

            <label htmlFor="breeds" className="form-label">
              Breeds
            </label>
            <select
              className="form-control"
              name="breeds"
              id="breeds"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed}>{breed}</option>
              ))}
            </select>

            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col">
          <PetSearchResult pets={pets}></PetSearchResult>
        </div>
      </div>
    </div>
  );
};

export default SearchPet;
