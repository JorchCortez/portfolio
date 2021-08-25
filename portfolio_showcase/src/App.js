import './App.css';
import ExpandingCard from './Components/ExpandingCard/ExpandingCard';
import React, { useState } from 'react';

const cards = [{title:'first title', img:'https://source.unsplash.com/random/800x600'},
               {title:'second title', img:'https://source.unsplash.com/random/900x700'},
               {title:'third title', img:'https://source.unsplash.com/random/800x600'},
               {title:'forth title', img:'https://source.unsplash.com/random/900x700'},
               {title:'fifth title', img:'https://source.unsplash.com/random/800x600'}]
function App() {
  const [activeCard, setActiveCard] = useState(0);

  const updateActive = (card) => {
    setActiveCard(card)
  }

  return (
    <div className="App">
      <ExpandingCard cards={cards} activeCard={activeCard} updateActive={updateActive}/>
    </div>
  );
}

export default App;
