import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import "./CustomerApiii.css";       
import TableComponent from './TableComponent.jsx';
import Dec4Router from './Dec4Router.jsx';
import axios from 'axios'
const CustomerApiii = () => {
    const [data, setData] = useState([]);
    const [err,setErr] = useState("");
    const[search, setSearch]= useState("");
const navigate = useNavigate();

   
    const Click= () =>{
        axios .get("https:jsonplaceholder.typicode.com/users")
        .then((res) => {
// console.log('data received', res.data)
setData(res.data);
        })
        .catch((err)=> {
            console.log('err', err)
            setErr(err)

        })

    };
    const SearchNow = (event)=> {
        setSearch(event.target.value);
    }
    return (
        <div>
        <h2>CustomerApi</h2>
        <div>
        <button onClick={Click}>Click</button> <br /> <br />
        </div>
        <input type="text" onChange={(event)=>SearchNow(event)} placeholder='search' value={search} /> <br /> <br />
        <table className="table table-bordered" border={2} cellPadding={10} cellSpacing={2}>
            <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>phone</th>
                <th>address</th>
            </tr>
            </thead>
            <tbody>
{data.length>0 &&
        data.filter((y)=> y.username.toLowerCase().includes(search.toLowerCase()))
        .map((y)=>{
            return(
              <tr>
                <td>{y.id}</td>
                <td>{y.username}</td>
                <td>{y.phone}</td>
                <td>{y.address.city}</td>
              </tr>  
            )
        })}
            </tbody>
        </table> <br /><br />
        <button onClick={ () => navigate("/table")}>Go to table page</button>

              <br /><br /><br /> <hr />
          
        </div>
    );
};
export default CustomerApiii;