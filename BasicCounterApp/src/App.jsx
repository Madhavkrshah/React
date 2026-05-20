import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <div className="button-container">
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
