import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Toyota",
    model: "Camry",
  });

  function updateMake(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function updateModel(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  function updateYear(event) {
    const currentYear = new Date().getFullYear();
    const year = event.target.value;
    if (year < currentYear) {
      setCar((c) => ({ ...c, year: year }));
    } else {
      setCar((c) => ({ ...c, year: currentYear }));
    }
  }

  return (
    <>
      <div>
        <p>{`My Fav Car is : ${car.make} ${car.model} ${car.year}`}</p>
        <input
          type="text"
          placeholder="Make"
          value={car.make}
          onChange={updateMake}
        />
        <input
          type="text"
          placeholder="Model"
          value={car.model}
          onChange={updateModel}
        />
        <input
          type="number"
          placeholder="Year"
          value={car.year}
          onChange={updateYear}
        />
      </div>
    </>
  );
}

export default MyComponent;
