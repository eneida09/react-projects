import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import Subcategory from "./Subcategory";

function App() {
  const [subCategories, setSubCategories] = useState([]);

 

  return (
    <>
      <Navbar setSubCategories={setSubCategories} />
      <Subcategory subCategories={subCategories} />
    </>
  );
}

export default App;
