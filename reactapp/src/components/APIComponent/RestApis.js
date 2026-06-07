import React, { useState } from "react";

function RestApis() {

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [records, setRecords] = useState([]);   // store GET data

  // GET API
  function getrecord() {
    fetch("https://localhost:44326/api/API")
      .then((response) => response.json())
      .then((data) => {
        console.log("GET Response:", data);
        setRecords(data);   // store data in state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  // POST API
  function postrecord() {

    var obj = {
      name: inputName,
      email: inputEmail
    };

    fetch("https://localhost:44326/api/API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("POST Response:", data);
        alert("Record Added Successfully");

        setInputName("");
        setInputEmail("");

        getrecord(); // refresh list after insert
      })
      .catch((error) => console.error("Error posting data:", error));
  }

  return (
    <div className="container mt-4">

     

      <h4>Records List</h4>

      <ul className="list-group mb-4">
        {records.map((item, index) => (
          <li key={index} className="list-group-item">
            <strong>Name:</strong> {item.name} | 
            <strong> Email:</strong> {item.email}
          </li>
        ))}
      </ul>

      <h4>Post Record</h4>

      <input
        type="text"
        placeholder="Name"
        className="form-control mb-2"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email"
        className="form-control mb-2"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />

      <button onClick={postrecord} className="btn btn-success">
        Post Record
      </button>

    </div>
  );
}

export default RestApis;