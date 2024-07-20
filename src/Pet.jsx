import { Link } from "react-router-dom";

const Pet = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
      }}
    >
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-subtitle text-body-secondary">
          {props.animal} - {props.breed}
        </p>
        <Link to={`/details/${props.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Pet;
