function List() {
  //const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "cherry", calories: 5 },
    { id: 4, name: "date", calories: 20 },
    { id: 5, name: "elderberry", calories: 73 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); ALPHABETICAL ORDER
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // SORT BY CALORIES
  //   fruits.sort((a, b) => a.calories - b.calories); // SORT BY CALORIES
  fruits.sort((a, b) => b.calories - a.calories); // SORT BY CALORIES

  //   const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);

  const highCalFruit = fruits.filter((fruit) => fruit.calories >= 100);

  const listItems = highCalFruit.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calories} calories</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
