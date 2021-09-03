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
import { CharacterBase, CharacterName } from '../../gorgasali/Characters/Character';
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


function App() {
  const deck = new Deck();

  const [board] = useState(() => new BoardClass());
  const [selecterCharacter, setSelectedCharacter] = useState<CharacterBase | undefined>()

  board.placeCharacter(0, 0, createEbue());
  board.placeCharacter(1, 0, createArmazi());
  board.placeCharacter(2, 0, createMedea());
  board.placeCharacter(3, 0, createTharsis());
  board.placeCharacter(4, 0, createVaras());
  board.placeCharacter(5, 0, createTsiva());
  board.placeCharacter(6, 0, createOctor());
  board.placeCharacter(7, 0, createKruber());
  board.placeCharacter(8, 0, createDrain());
  board.placeCharacter(9, 0, createEmoon());

  const symbols = getAllCharacterNames().map(c => <CharacterSymbol name={c} />)

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <Board board={board} onTileClick={tile => setSelectedCharacter(tile.character)} />
        </div>
        <div className="col-md-6">
          {selecterCharacter ? <CharacterComponent character={selecterCharacter} /> : ""}
        </div>
      </div>

    </div>
  );

  function createCard(w: Card): JSX.Element {
    return <CardComponent card={w} isRotated={false} needsReload={false} placeholder="" />;
  }
}

export default App;


function createEbue() {
  const ebue = new Ebue();
  ebue.weaponSlot1 = { weaponCard: new ScoutWeaponCard("Scum", "epic", 22, noSpecialSkill), needsReload: false };
  ebue.weaponSlot2 = { weaponCard: new MassiveWeaponCard("Grdzaaa", "rare", 143, noSpecialSkill, 60), needsReload: false };
  ebue.defensiveConsumable = new MagicField();
  ebue.consumable1 = new ObstacleNulifier("forest");
  ebue.consumable2 = new ObstacleNulifier("water");
  ebue.throwable = new MagicSpear();
  ebue.helmet = new Helmet();
  ebue.bodyArmor = new BodyArmor();
  ebue.health = 15;
  ebue.consumableBagSlot1 = new ObstacleNulifier("mountain");
  ebue.consumableBagSlot2 = new Teleport();
  ebue.throwableBagSlot = new SmokeBulb();
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

function createEmoon() {
  const emoon = new Emoon();
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
