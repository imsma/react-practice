import { useFetch } from "./customhooks/useFetch";

function App() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {users.map((user) => {
        return <h4 key={user.id}>{`${user.id}. ${user.name}`}</h4>;
      })}
    </>
  );
}

export default App;
