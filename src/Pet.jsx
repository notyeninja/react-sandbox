const Pet = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
      }}
    >
      <div className="card-body">
        <div className="card-title">{props.name}</div>
        <div className="card-subtitle text-body-secondary">
          {props.animal} - {props.breed}
        </div>
      </div>
    </div>
  );
};

export default Pet;
