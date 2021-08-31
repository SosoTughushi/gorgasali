import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Board from '../Board';
import Card from '../Cards/Card/Index';
import Deck from '../../gorgasali/Cards/Deck';

function App() {
  const deck = new Deck();

  const weaponCards = deck.weaponCards.map(w => <Card card={w} />).concat(
    deck.supportCards.map(w=> <Card card={w} />)
  )
  return (
    <div className="App">
      <Board />
      {weaponCards}
    </div>
  );
}

export default App;
