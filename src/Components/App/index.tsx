import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Board from '../Board';
import Card from '../Cards/Card/Index';
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


function App() {
  const deck = new Deck();

  const weaponCards = deck.weaponCards.map(w => <Card card={w} isRotated={false} needsReload={false} placeholder="" />).concat(
    deck.supportCards.map(w => <Card card={w} isRotated={false} needsReload={false} placeholder="" />)
  )

  const ebue = new Ebue();
  ebue.weaponSlot1 = {weaponCard: new ScoutWeaponCard("Scum", "epic", 22, noSpecialSkill),needsReload: false}
  ebue.weaponSlot2 = {weaponCard: new MassiveWeaponCard("Grdzaaa", "rare", 143, noSpecialSkill, 60),needsReload: false}
  ebue.defensiveConsumable = new MagicField();
  ebue.consumable1 = new ObstacleNulifier("forest");
  ebue.consumable2 = new ObstacleNulifier("water");
  ebue.throwable = new MagicSpear();
  ebue.helmet = new Helmet();
  ebue.bodyArmor = new BodyArmor();
  ebue.health = 15;
  const characters = [ebue].map(c => <CharacterComponent character={c} />);
  return (
    <div className="App">
       {/* <Board />
      {weaponCards}  */}
      {characters}
    </div>
  );
}

export default App;
