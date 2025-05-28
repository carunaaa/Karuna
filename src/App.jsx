import { useState } from "react";

import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Portfolio />
    </>
  );
}

export default App;
