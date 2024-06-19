import { useState } from "react";

function App() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setDetails((d) => {
      return {
        ...d,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Name: </h3> <input name="name" type="text" onChange={handleInput} />
        <h3>Email: </h3>{" "}
        <input name="email" type="email" onChange={handleInput} />
        <h3>Password: </h3>{" "}
        <input name="password" type="password" onChange={handleInput} />
        <h3>Address: </h3>{" "}
        <textarea name="address" onChange={handleInput}></textarea> <br />
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default App;
