import List from "./List.jsx";

function App() {
  // const fruits = null;
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "cherry", calories: 5 },
    { id: 4, name: "date", calories: 20 },
    { id: 5, name: "elderberry", calories: 73 },
  ];

  const vegitables = [
    { id: 1, name: "potatos", calories: 110 },
    { id: 2, name: "carrots", calories: 25 },
    { id: 3, name: "onions", calories: 45 },
    { id: 4, name: "spinach", calories: 7 },
    { id: 5, name: "broccoli", calories: 55 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}

      {vegitables.length > 0 && (
        <List items={vegitables} category="Vegitables" />
      )}
    </>
  );
}

export default App;
