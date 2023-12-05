import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const MainTable = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:4000/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete(" http://localhost:4000/users/" + id)
        .then((res) => {
          alert("Record is deleted");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="text-end">
          <Link to="/create" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              {columns.map((c, id) => (
                <th key={id}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((data, id) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <Link
                    to={`/update/${data.id}`}
                    className="btn btn-sm btn-success"
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(data.id)}
                    className="btn btn-sm ms-1 btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainTable;
