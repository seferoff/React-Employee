import React, { useEffect, useState } from "react";
import "./Employees.css";

const Employees = () => {
  const [user, setUser] = useState([]);
  // const [employee, setEmployee] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood"
    );
    const data = await response.json();
    return setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>Employee List</h1>
      <table>
      <thead>
        <tr>
          <th>Id<br></br>
            <input type="number" placeholder="Search"/></th>
          <th>
            Name<br></br>
            <input type="text" placeholder="Search"/>
          </th>
          <th>Department<br></br>
            <input type="text" placeholder="Search"/></th>
          <th>Role<br></br>
            <input type="text" placeholder="Search"/></th>
        </tr>
        </thead>
        <tbody>
        {user &&
          user.length > 0 &&
          user.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.role}</td>
              </tr>
            );
          })}
          </tbody>
      </table>
    </main>
  );
};

export default Employees;
