
import PetFood from "./PetFood";
import "./pets.css";

function MyPet(props) {
    const handlePet = () => {
props.handlePetView("25");               //child to parent
    };
  return (
    <div>
        <div className="my-pet">
      <h3>MY PET COMPONENT</h3>
      <p>This is my {props.nam} propscomponent</p>
      <div>this is my props age {props.ag}</div>
<button onClick={handlePet}>PET</button>

      </div>
      

    </div>

  );
}
export default MyPet;
