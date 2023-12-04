import React, { useEffect, useState } from "react";
import axios from "axios";
const MainTable = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th kay={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((data, i) => (
              <tr kay={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>Up/De</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainTable;
