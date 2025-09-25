import { useState, useEffect } from "react";
import "./App.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const url = "https://mrbo.mrwallet.app/api/categories/tree";
function App() {
  const [categories, setCagetories] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCagetories(data))

      .catch((err) => console.error("Gabim:", err));
  }, []);

  return (
    <div style={{ width: "500px", margin: "20px auto" }}>
      {categories.map((category) => (
        <Accordion key={category.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {category.name}
          </AccordionSummary>
          <AccordionDetails>
            {category.children_recursive &&
            category.children_recursive.length > 0 ? (
              category.children_recursive.map((sub) => (
                <div key={sub.id} style={{ marginLeft: "20px" }}>
                  {sub.name}
                </div>
              ))
            ) : (
              <div>Nuk ka nenkategory</div>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default App;
