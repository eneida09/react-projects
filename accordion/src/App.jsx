import React, { useState } from "react";
import data from "./data";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {questions.map((question) => (
            <Accordion key={question.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${question.id}-content`}
                id={`panel${question.id}-header`}
              >
                <Typography>{question.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{question.info}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
