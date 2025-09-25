import { useState } from "react";
import "./App.css";
import Review from "./Review";
import data from "./data";
import reviews from "./data";

function App() {
  return (
    <main>
      <section className="reviews">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
