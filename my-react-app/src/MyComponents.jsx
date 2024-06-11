import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployee, setIsEmployee] = useState(false);

  const updateName = () => {
    setName("SMA");
    console.log(name);
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployeeStatus = () => {
    setIsEmployee(!isEmployee);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
      </div>

      <div>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
      </div>

      <div>
        <p>IsEmploye: {isEmployee ? "Yes" : "No"}</p>
        <button onClick={toggleEmployeeStatus}>Toggle Employee Status</button>
      </div>
    </>
  );
}

export default MyComponent;
