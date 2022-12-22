import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css"


// importing from the pages folder
import About from "./routes/About"
import Contact from "./routes/Contact"
import Home from "./routes/Home"
import Project from "./routes/Project"
import NotFound from "./routes/NotFound"

function App() {
  return (
    <>

    {/* Pretty self-explanatory; for routing..duh! */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      
    </>
  );
}

export default App;
