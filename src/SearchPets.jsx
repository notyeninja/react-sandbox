const SearchPet = () => {
  return (
    <div className="container">
      <form action="">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          id="location"
          type="text"
          value="location"
          className="form-control"
        />
        <label htmlFor="animal" className="form-label">
          Animal
        </label>
        <input
          id="animal"
          type="text"
          value="Animal"
          className="form-control"
        />
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
