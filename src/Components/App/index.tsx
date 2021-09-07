import React, { useState } from 'react';
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
import MagicField from '../../gorgasali/Cards/Support/Defensive/MagicField';
import ObstacleNulifier from '../../gorgasali/Cards/Support/Consumable/ObstacleNulifier';
import MagicSpear from '../../gorgasali/Cards/Support/Throwable/MagicSpear';
import { BodyArmor, Helmet } from '../../gorgasali/Cards/Support/Armor/Armor';
import { Card } from '../../gorgasali/Cards/Card';
import Armazi from '../../gorgasali/Characters/Armazi';
import Character, {  CharacterName } from '../../gorgasali/Characters/Character';
import CharacterSymbol from '../Character/CharacterSybol';
import BoardClass from '../../gorgasali/board';
import Medea from '../../gorgasali/Characters/Medea';
import Varas from '../../gorgasali/Characters/Varas';
import PrincessTsiva from '../../gorgasali/Characters/PrincessTsiva';
import Octor from '../../gorgasali/Characters/Octor';
import Kruber from '../../gorgasali/Characters/Kruber';
import Dirain from '../../gorgasali/Characters/Dirain';
import Emoon from '../../gorgasali/Characters/Emoon';
import { Teleport } from '../../gorgasali/Cards/Support/Consumable/MovementConsumables';
import SmokeBulb from '../../gorgasali/Cards/Support/Throwable/SmokeBulb';
import CharacterTileList from '../Character/CharacterTileList';
import Turn from "../Turn";

function App() {
  const deck = new Deck();

  const [board] = useState(() => {
    const b = new BoardClass();

    b.placeCharacter(0, 0, createEbue());
    b.placeCharacter(1, 0, createArmazi());
    b.placeCharacter(2, 0, createMedea());
    b.placeCharacter(3, 0, createTharsis());
    b.placeCharacter(4, 0, createVaras());
    b.placeCharacter(5, 0, createTsiva());
    b.placeCharacter(6, 0, createOctor());
    b.placeCharacter(7, 0, createKruber());
    b.placeCharacter(8, 0, createDrain());
    b.placeCharacter(9, 0, createEmoon());

    return b;
  });
  const [selecterCharacter, setSelectedCharacter] = useState<Character | undefined>()



  const symbols = getAllCharacterNames().map(c => <CharacterSymbol name={c} />)

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
        <Turn/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <CharacterTileList characters={board.characters} onCharacterTileClick={character => setSelectedCharacter(character)} selectedCharacter={selecterCharacter} />
        </div>
        <div className="col-md-5">
          <Board board={board} onTileClick={tile => setSelectedCharacter(tile.character)} selectedCharacter={selecterCharacter} />
        </div>
        <div className="col-md-5">
          {selecterCharacter ? <CharacterComponent character={selecterCharacter} /> : ""}
        </div>
      </div>

    </div>
  );
}

export default App;


function createEmoon() {
  const ebue = new Emoon();
  ebue.weaponSlot1.card = new ScoutWeaponCard("Scum", "epic", 22, noSpecialSkill);
  ebue.weaponSlot2.card = new MassiveWeaponCard("Grdzaaa", "rare", 143, noSpecialSkill, 60);
  ebue.defensiveConsumable.card = new MagicField();
  ebue.consumable1.card = new ObstacleNulifier("forest");
  ebue.consumable2.card = new ObstacleNulifier("water");
  ebue.throwable.card = new MagicSpear();
  ebue.helmet.card = new Helmet();
  ebue.bodyArmor.card = new BodyArmor();
  ebue.health = 15;
  ebue.consumableBagSlot1.card = new ObstacleNulifier("mountain");
  ebue.consumableBagSlot2.card = new Teleport();
  ebue.throwableBagSlot.card = new SmokeBulb();
  return ebue;
}

function createArmazi() {
  const armazi = new Armazi();
  return armazi;
}

function createMedea() {
  const medea = new Medea();
  return medea;
}

function createTharsis() {
  const tharsis = new Tharsis();
  return tharsis;
}

function createVaras() {
  const varas = new Varas();
  return varas;
}

function createTsiva() {
  const tsiva = new PrincessTsiva();
  return tsiva;
}

function createOctor() {
  const octor = new Octor();
  return octor;
}

function createKruber() {
  const kruber = new Kruber();
  return kruber;
}

function createDrain() {
  const drain = new Dirain();
  return drain;
}

function createEbue() {
  const emoon = new Ebue();
  return emoon;
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
