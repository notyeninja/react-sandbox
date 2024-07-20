import Pet from "./Pet";

const PetSearchResult = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h3>No pets found!</h3>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            id={pet.id}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default PetSearchResult;
