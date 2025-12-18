import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

const UserData = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const { id } = useParams();

  axios
    .get(`https://dummyjson.com/users/${id}`)
    .then((res) => {
      //console.log('data received user data', res)
      //console.log("User ID from params:", id);
      setData(res.data);
    })
    .catch((err) => {
      // console.log('err', err)
      setErr(err);
    });

  return (
    <div>
      <h2>UserLists</h2>
      <div>{/* <button onClick={clickHere}>Click Here</button> */}</div>
      <table
        className="table table-bordered"
        border={2}
        cellPadding={5}
        cellSpacing={3}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Bloodgroup</th>
            <th>Email</th>
           <th>Gender</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id} </td>
            <td>{data.username}</td>
            <td>{data.age}</td>
            <td>{data.birthDate}</td>
            <td>{data.bloodGroup}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.phone}</td>
          </tr>
        </tbody>
      </table>{" "}
      <br />
      <br />
      <br />
    </div>
  );
};
export default UserData;
