function Button() {
  function handleClick() {
    console.log("Button clicked");
  }

  let count = 0;
  const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time(s)`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };

  const handleClick3 = (e) => {
    console.log(e);
  };

  const handleClick4 = (e) => {
    e.target.textContent = "OUCH 🥎";
  };

  return (
    <>
      {/* <button onClick={handleClick}>Click Me ⛷️</button> */}
      <button onClick={() => handleClick2("SMA")}>Click Me2 ⛷️</button>
      <br />
      <br />
      <button onClick={(e) => handleClick3(e)}>Click Me3 ⛷️</button>
      <br />
      <br />
      <button onClick={(e) => handleClick4(e)}>Click Me4 ⛷️</button>

      <br />
      <br />
      <button onDoubleClick={(e) => handleClick4(e)}>
        Double Click Me4 ⛷️
      </button>
      <br />
      <br />
    </>
  );
}

export default Button;
