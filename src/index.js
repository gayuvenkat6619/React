import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PetFood from './components_task1/PetFood.jsx';
import State from './components_task1/State.jsx';
import CustomerApiii from './components_task1/CustomerApiii.jsx';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import Menu from "@mui/material/Menu";
import TableComponent from "./components_task1/TableComponent.jsx";
import Dec4Router from "./components_task1/Dec4Router.jsx";
import CircularProgressbar from "./components_task1/CircularProgressbar.jsx";
import BasicSwitches from "./components_task1/BasicSwitches.jsx";
import Variants_Skeleton from "./components_task1/Variants_Skeleton.jsx";
 import Dec5Task from "./components_task1/Dec5Task.jsx";
 import { BrowserRouter,Router, Link,Routes} from "react-router-dom";
 import { useReducer } from "react";
 import store from "./components_task1/redux/store.js";
 import { Provider } from "react-redux";

 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
     <Dec5Task/>
    </Provider>
   

    {/* <App />  */}
    
      {<PetFood  userName="PET" userAge="10" userMail="mail@mail.com"/>}
    {/* <State/>  */}
  
  {/* <CustomerApiii/> 
<TableComponent/>  */}
  <Dec4Router/>
   
   <CircularProgressbar/>
  <BasicSwitches/>
  <Variants_Skeleton/>
 
   
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
