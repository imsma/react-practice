import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      {users.map((user) => {
        return <h4 key={user.id}>{user.name}</h4>;
      })}
    </>
  );
}

export default App;
