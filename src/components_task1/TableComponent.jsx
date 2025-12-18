import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const TableComponent = () => {
  const [table, setTable] = useState([]);
  const [err, setErr] = useState("");
  
 const navigate = useNavigate();
  const TableClick = () => {
    axios
      .get("https:jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("data received", res.data);
        setTable(res.data);
      })
      .catch((err) => {
        console.log("err", err);
        setErr(err);
      });
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "UserName", width: 130 },
    
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 200,
    },
    {
      field:"website",
      headerName:"Website",
      type:"string",
      width:160,
    },
  ];

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  const paginationModel = { page: 0, pageSize: 5 };

    return (
      <div> <center>
        <div>
          <button onClick={TableClick}>TableClick</button>
          <button onClick={() => navigate("/state")}>Go to state</button>
        </div>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={table}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
        </center> <br /><br />

      </div>
    );
  }
 export default TableComponent;
