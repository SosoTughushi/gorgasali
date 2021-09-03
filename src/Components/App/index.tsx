import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Board from '../Board';
import CardComponent from '../Cards/Card/Index';
import Deck from '../../gorgasali/Cards/Deck';
import CharacterComponent from '../Character';
import Ebue from '../../gorgasali/Characters/Ebue';
import Tharsis from '../../gorgasali/Characters/Tharsis';
import ScoutWeaponCard from '../../gorgasali/Cards/Weapons/ScoutWeaponCard';
import { noSpecialSkill } from '../../gorgasali/Cards/Weapons/WeaponSpecialSkill';
import MassiveWeaponCard from '../../gorgasali/Cards/Weapons/MassiveWeaponCard';
import Barrier from '../../gorgasali/Cards/Support/Defensive/Barrier';
import MagicField from '../../gorgasali/Cards/Support/Defensive/MagicField';
import ObstacleNulifier from '../../gorgasali/Cards/Support/Consumable/ObstacleNulifier';
import MagicSpear from '../../gorgasali/Cards/Support/Throwable/MagicSpear';
import { BodyArmor, Helmet } from '../../gorgasali/Cards/Support/Armor/Armor';
import WeaponCard from '../../gorgasali/Cards/Weapons/WeaponCard';
import { Card } from '../../gorgasali/Cards/Card';
import Armazi from '../../gorgasali/Characters/Armazi';
import { CharacterName } from '../../gorgasali/Characters/Character';
import CharacterSymbol from '../Character/CharacterSybol';
import BoardClass from '../../gorgasali/board';


function App() {
  const deck = new Deck();

  const weaponCards =
    deck.weaponCards
      .map(createCard)
      .concat(
        deck.supportCards
          .map(createCard)
      );

  const ebue = createEbue();
  const characters = [ebue].map(c => <CharacterComponent character={c} />);
  const board = new BoardClass();
  board.placeCharacter(15,15, ebue);

  const symbols = getAllCharacterNames().map(c => <CharacterSymbol name={c} />)
  return (
    <div className="App">
      <h1>{symbols}</h1>
      {characters}
      <Board board={board} />
      {weaponCards} 
    </div>
  );

  function createCard(w: Card): JSX.Element {
    return <CardComponent card={w} isRotated={false} needsReload={false} placeholder="" />;
  }
}

export default App;


function createEbue() {
  const ebue = new Armazi();
  ebue.weaponSlot1 = { weaponCard: new ScoutWeaponCard("Scum", "epic", 22, noSpecialSkill), needsReload: false };
  ebue.weaponSlot2 = { weaponCard: new MassiveWeaponCard("Grdzaaa", "rare", 143, noSpecialSkill, 60), needsReload: false };
  ebue.defensiveConsumable = new MagicField();
  ebue.consumable1 = new ObstacleNulifier("forest");
  ebue.consumable2 = new ObstacleNulifier("water");
  ebue.throwable = new MagicSpear();
  ebue.helmet = new Helmet();
  ebue.bodyArmor = new BodyArmor();
  ebue.health = 15;
  return ebue;
}

function getAllCharacterNames(): CharacterName[] {
  return [
    "ARMAZI",
    "D'RAIN",
    "E'MOON",
    "EBUE",
    "KRUBER",
    "MEDEA",
    "OCTOR",
    "PRINCESS TSIVA",
    "THARSIS",
    "VARAS"
  ]
}
