import { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([
    { year: 2000, make: "Toyota", model: "Corolla" },
    { year: 2010, make: "Honda", model: "Civic" },
    { year: 2015, make: "Ford", model: "Fusion" },
    { year: 2018, make: "Chevrolet", model: "Malibu" },
  ]);

  function addNewCar() {
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;

    const newCar = {
      make: make,
      model: model,
      year: year,
    };

    setCars((c) => {
      return [...c, newCar];
    });

    document.getElementById("make").value = "";
    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
  }

  function removeCar(index) {
    setCars(
      cars.filter((c, i) => {
        return i != index;
      })
    );
  }

  return (
    <>
      <h2>Cars</h2>
      <ul>
        {cars.map((c, index) => {
          return (
            <li key={index}>
              {`Make: ${c.make} Model: ${c.model} Year: ${c.year}`}

              <span
                onClick={() => removeCar(index)}
                style={{ fontSize: "2rem", color: "red", cursor: "pointer" }}
              >
                &nbsp;␡
              </span>
            </li>
          );
        })}
      </ul>

      <div>
        <input type="text" placeholder="Make" id="make" />
        <input type="text" placeholder="Model" id="model" />
        <input type="text" placeholder="Year" id="year" />
        <button onClick={addNewCar}>Add New Car</button>
      </div>
    </>
  );
}

export default MyComponent;
