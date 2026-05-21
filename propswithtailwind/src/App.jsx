import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-6">
        <div className="text-4xl font-bold p-4 bg-yellow-400 rounded-2xl m-3">
          TailWind CSS
        </div>

        <Card
          name="Anubhav Jain"
          profession="Reader"
          imgLink="https://images.pexels.com/photos/37593671/pexels-photo-37593671.jpeg"
        />

        <Card
          name="Anita Aggarwal"
          profession="Beautition"
          imgLink="https://images.pexels.com/photos/14158599/pexels-photo-14158599.jpeg"
        />
      </div>
    </>
  );
}

export default App;
