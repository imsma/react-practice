import { useState, useEffect } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  /**
   * We only need one event listener
   * however, following  code will ad a new
   * event listener, whenever the component re-renders
   * we will solve this with the help useEffect hook
   */
  // window.addEventListener("resize", setWindowSize);
  // console.log("Event Liste");

  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    console.log("EVENT LISTEN ADDED");

    return () => {
      window.removeEventListener("resize", setWindowSize);
      console.log("EVENT LISTEN REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `Window Size: ${width} X ${height}`;
  }, [width, height]);

  function setWindowSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <h1>Widnow Size</h1>
      <p>Windows Width: {width}</p>
      <p>Windows Height: {height}</p>
    </div>
  );
}

export default MyComponent;
