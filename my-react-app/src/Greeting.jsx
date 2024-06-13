import React, { useState } from "react";

const Greeting = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      {showText ? <p>Hi Mom</p> : null}
      <button onClick={() => setShowText(!showText)}>Toggle visibility</button>
    </div>
  );
};

export default Greeting;
