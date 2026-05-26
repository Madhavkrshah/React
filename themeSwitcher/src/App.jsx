import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center bg-yellow-300 p-4">Theme Switcher App</h1>
    </>
  );
}

export default App;
