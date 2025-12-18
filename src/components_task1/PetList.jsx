
import { useState } from "react";
import MyPet from "./MyPet.jsx";
import "./pets.css";
// import {useNavigate} from "react-router-dom";


function PetList (props){
      const [petss,setPetss]= useState();
// const navigate = useNavigate();

      const handlePetView = (value) => {
        setPetss(value);
        //console.log("value from child to parent",value);
    };
    
    return(
        <div>
            <div className="pets-list">
            <h3>PET LIST</h3>
            <p className="petlist">  list can refer to a list of animals commonly kept as pets, such as dogs,
                 cats, and rabbits, or it can refer to the many benefits of pet ownership, including companionship, exercise,
                  and emotional support </p> {petss}

                  printingname={props.name} prinitingage={props.age}

            <MyPet nam={props.name} ag={props.age} handlePetView={handlePetView}/>
            {/* <button onClick={() => navigate("/state")}>back to state page</button>   */}
            </div>
            
        
        </div>
    );
}
export default PetList;