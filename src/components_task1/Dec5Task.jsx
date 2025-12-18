import React from "react";
import {Routes, Route,BrowserRouter,Link} from "react-router-dom";
import CircularColor from "./CircularProgressbar";   
import BasicSwitches from "./BasicSwitches";
import Variants_Skeleton from "./Variants_Skeleton";    
import CircularProgressbar from "./CircularProgressbar";
import FirstComp from "./homeredux/FirstComp";

const Dec5Task = () => {
    return(
<>

    <header style={{ backgroundColor: "blue",
    height: "100px",
    textAlign: "center",
    alignContent:"center",
    margin:"10px",
    padding:"10px"

     }}><center><h2>Dec 5 Task</h2></center></header>

<BrowserRouter>
<nav>
<Link to="/">Variants_Skeleton</Link>|{""}
<Link to="/progressbar">CircularProgress</Link>|{""}
<Link to="/switch">BasicSwitches</Link>|{""}
<Link to="/firstcomp">reduxcomp</Link>|{""}
</nav>
<Routes>
            <Route path="/" element={<Variants_Skeleton/>}/>
            <Route path="/progressbar" element={<CircularProgressbar/>}/>
            <Route path="/switch" element={<BasicSwitches/>}/>
            <Route path = "/firstcomp" element= {<FirstComp/>}/>
        </Routes>
</BrowserRouter>





    <footer style={{ backgroundColor: "black",
    height: "100px",
    textAlign: "center",
    alignContent:"center",
    margin:"10px",
    padding:"10px",
    fontSize:"15",
    color:"white"

     }}> completed with material components</footer>
</>
    );
}
export default Dec5Task;