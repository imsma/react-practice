import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Bob" />
    </>
  );
}

export default App;
