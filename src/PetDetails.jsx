import { useParams } from "react-router-dom";

const PetDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Pet details page</h2>
      <p>Id is: {id}</p>
    </div>
  );
};

export default PetDetails;
