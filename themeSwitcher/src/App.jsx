import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="p-4 bg-yellow-400 text-center">Theme Switcher App</h1>
    </>
  );
}

export default App;
