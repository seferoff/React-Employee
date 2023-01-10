import React, { useEffect, useState } from "react";
import "./Employees.css";

const Employees = () => {
  const [user, setUser] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [valueId, setValueId] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueDepartment, setValueDepartment] = useState("");
  const [valueRole, setValueRole] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      "https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood"
    );
    const data = await response.json();
    setUser(data);
    setEmployee(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeId = (e) => {
    setValueId(e.target.value);
    if (e.target.value !== "") {
      const clone = user.filter((item) => {
        return +item.id === +e.target.value;
      });
      setEmployee(clone);
    }
    if (e.target.value === "") {
      setEmployee(user);
    }
  };

  const handleChangeName = (e) => {
    setValueName(e.target.value);
    if (e.target.value !== "") {
      const clone = user.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setEmployee(clone);
    }
    if (e.target.value === "") {
      setEmployee(user);
    }
  };

  const handleChangeDepartment = (e) => {
    setValueDepartment(e.target.value);
    if (e.target.value !== "") {
      const clone = user.filter((item) => {
        return item.department.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setEmployee(clone);
    }
    if (e.target.value === "") {
      setEmployee(user);
    }
  };

  const handleChangeRole = (e) => {
    setValueRole(e.target.value);
    if (e.target.value !== "") {
      const clone = user.filter((item) => {
        return item.role.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setEmployee(clone);
    }
    if (e.target.value === "") {
      setEmployee(user);
    }
  };

  const handleClick = () => {
    setValueId("")
    setValueName("")
    setValueDepartment("")
    setValueRole("")
  }


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
                value={valueId}
                onChange={(e) => handleChangeId(e)}
                onClick={() => handleClick()}
              />
            </th>
            <th>
              Name<br></br>
              <input
                type="text"
                placeholder="Search"
                value={valueName}
                onChange={(e) => handleChangeName(e)}
                onClick={() => handleClick()}
              />
            </th>
            <th>
              Department<br></br>
              <input
                type="text"
                placeholder="Search"
                value={valueDepartment}
                onChange={(e) => handleChangeDepartment(e)}
                onClick={() => handleClick()}
              />
            </th>
            <th>
              Role<br></br>
              <input
                type="text"
                placeholder="Search"
                value={valueRole}
                onChange={(e) => handleChangeRole(e)}
                onClick={() => handleClick()}
              />
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
