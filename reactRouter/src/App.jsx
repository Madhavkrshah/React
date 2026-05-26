import React from "react";
import {
  About,
  Contact,
  Footer,
  Github,
  Header,
  Home,
  User,
} from "./componets";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="github" element={<Github />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
