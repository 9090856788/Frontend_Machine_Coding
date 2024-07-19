/* eslint-disable no-unused-vars */
import React from "react";
import Accordion from "./components/Accordion";
import { accordionData } from "./mockData/MockData.jsx";
import "./app.css";

const App = () => {
  return (
    <div>
      <h1 className="heading">Accordion for React FAQ: -</h1>
      <Accordion items= { accordionData }/>
    </div>
  )
}

export default App;