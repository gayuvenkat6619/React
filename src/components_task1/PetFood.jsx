import PetList from "./PetList";
import "./pets.css";

function PetFood(props) {
  


  return (
    <div>
        <div className="pet-food">
      <h3>PET FOOD</h3>
      mail={props.userMail}
      <p className="food">
         
        food is specially formulated animal feed, available in various types
        like dry, wet, and raw, that provides complete and balanced nutrition
        for pets
      </p>
       
       propsname=    {props.userName} propsage={props.userAge}
      <PetList name={props.userName} age={props.userAge} />
      </div>
    </div>
  );
}
export default PetFood;
