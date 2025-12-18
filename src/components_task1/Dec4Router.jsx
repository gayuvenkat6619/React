import { Routes, Route,BrowserRouter } from "react-router-dom"; 
import TableComponent from "./TableComponent";
import State from "./State";
import CustomerApiii from "./CustomerApiii";
import UserData from "./UserData";  
const Dec4Router =()=>{
    return(
        <div>
            <h2><center>Router Components</center></h2>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<CustomerApiii/>}/>
                <Route path="/table" element={<TableComponent/>}/>
                <Route path="/state" element={<State/>}/>
                <Route path="/user/:id" element={<UserData/>}></Route>
            </Routes>
            </BrowserRouter>

        </div>
    )
};
export default Dec4Router;