import { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";

function App() {
  const [people, setpeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length}Birthdays Today </h3>
        <List people={people} />
        <button onClick={() => setpeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
