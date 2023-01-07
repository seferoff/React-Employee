import React, { useEffect, useState } from "react";
import "./Employees.css";

const Employees = () => {
  const [user, setUser] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [value, setValue] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      "https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood"
    );
    const data = await response.json();
    setUser(data);
    setEmployee(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(user);
    const clone = employee.filter((item) => {
      if (e.target.value !== "") {
        return +item.id === +e.target.value;
      }
      setEmployee(clone);
    });
  };

  return (
    <main>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>
              Id<br></br>
              <input
                type="number"
                placeholder="Search"
                value={value}
                onChange={(e) => handleChange(e)}
              />
            </th>
            <th>
              Name<br></br>
              <input type="text" placeholder="Search" />
            </th>
            <th>
              Department<br></br>
              <input type="text" placeholder="Search" />
            </th>
            <th>
              Role<br></br>
              <input type="text" placeholder="Search" />
            </th>
          </tr>
        </thead>
        <tbody>
          {employee &&
            employee.length > 0 &&
            employee.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </main>
  );
};

export default Employees;
