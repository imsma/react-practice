import { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Pizza", "Burger", "Coke"]);

  function addNewFood() {
    const newFood = document.getElementById("newFood").value;
    // setFoods((f) => [...f, newFood]);
    setFoods((f) => {
      return [...f, newFood];
    });

    document.getElementById("newFood").value = "";
  }

  function removeFood(index) {
    setFoods(() => {
      return foods.filter((_, i) => {
        return i != index;
      });
    });
  }

  return (
    <>
      <div>
        <h2>Foods</h2>
        <ul>
          {foods.map((food, index) => {
            return (
              <li key={index}>
                {food}
                <a
                  href="#"
                  value={index}
                  onClick={() => removeFood(index)}
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    fontSize: "1rem",
                  }}
                >
                  &nbsp;␡
                </a>
              </li>
            );
          })}
        </ul>

        <input type="text" id="newFood" placeholder="New Food" />
        <button onClick={addNewFood}>Add New Food</button>
      </div>
    </>
  );
}

export default MyComponent;
