import {useState} from "react";
import "./State.css";
import { useNavigate } from 'react-router-dom';



const State = () => {
    const[num,setNum]=useState(0);
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const handleAdd = () =>{
        setNum(num+1);
        }
        const handleSub = () =>{
            setNum(num-1);

        }
        const handleChange =(data) => {
            setInput(data.target.value);

        }


    return (
        <div>
            <div className="state">
        <h1>STATE COMPONENTS</h1>
        <button onClick={handleAdd}>Add</button><br />
        <button onClick={handleSub}>Sub</button> <br/>
        <p>Count:{num}</p><br />
<input type="text" onChange={(event) => handleChange(event)} />  
          <button onClick={() => navigate("/")}>back to Home</button>

<p>Input:{input}</p>

</div>

</div>
    )
}
export default State;