import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log("click")
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
