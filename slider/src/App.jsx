import React, { useState } from "react";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function App() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const nextPerson = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;//merr indexin altual dhe shton1
      if (newIndex > people.length - 1) {//nese shkon pertej fundit te array
        newIndex = 0;//kthe index te fillimi
      }
      return newIndex;//kthe index e ri
    });
  };

  const prevPerson = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1;//merr indexin aktual
      if (newIndex < 0) {//nese shkon perpara fillimit te arrayt
        newIndex = people.length - 1;//kthen index e fundit
      }
      return newIndex;//kthe index e ri
    });
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevPerson}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextPerson}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
