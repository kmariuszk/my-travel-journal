import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  let cards = data.map(item => {
    return (
      <Card
        key={item.title}
        {...item}
      />
    )
  });

  let cards_len = cards.length;

  for (let i = cards_len - 1; i > 0; i--) {
    cards.splice(i, 0, <hr key={i}/>);
  }

  return (
    <>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </>
  );
}

export default App;
