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
import Character, { CharacterName } from '../../gorgasali/Characters/Character';
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
import TurnStateMachine, { AmmoBagUsed, DefensiveCardUsed, HealingCardUsed, Initial, Moved, MovementCardUsed, MovementDiceRolled, ThrowableCardUsed, TurnEnded, WeaponExtensionCardUsed } from '../../gorgasali/Turn/turnStateMachine';
import Potion from '../../gorgasali/Cards/Support/Consumable/Potion';
import CardSlot from '../../gorgasali/Characters/CardSlot';
import AmmoBag from '../../gorgasali/Cards/Support/Consumable/AmmoBag';
import TurnContext from '../../gorgasali/Turn/TurnContext';

function App() {
  const deck = new Deck();

  const toCardComponent = (card: Card) => {
    const slot = new CardSlot("Whatever");
    slot.card = card;
    return <CardComponent cardSlot={slot} needsReload={false} />
  }
  const cards = deck.supportCards.map(toCardComponent).concat(deck.weaponCards.map(toCardComponent))

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
  const [turnState, setTurnState] = useState<TurnStateMachine>(() => new Initial());
  const createInitialTurnContext = () => {
    return { self: board.currentPlayer, board: board, usedCards: [] };
  };
  const [turnContext, setTurnContext] = useState<TurnContext>(createInitialTurnContext)


  return (
    <div className="App">


      <div className="row">

        <div className="col-md-2">

          <CharacterTileList
            characters={board.characters}
            onCharacterTileClick={character => setSelectedCharacter(character)}
            selectedCharacter={selecterCharacter}
            currentPlayer={board.currentPlayer} />
        </div>
        <div className="col-md-5">
          <Board board={board} onTileClick={tile => setSelectedCharacter(tile.character)} selectedCharacter={selecterCharacter} />
        </div>
        <div className="col-md-5">
          <Turn turn={{ board: board, state: turnState, context: turnContext }} onStateChange={newTurn => {
            if (newTurn.state === "TurnEnded") {
              board.nextPlayer();
              setTurnState(new Initial());
              setTurnContext(createInitialTurnContext());
            } else {
              setTurnState(newTurn);
            }
          }} />
        </div>
      </div>
      {selecterCharacter ? <CharacterComponent character={selecterCharacter} /> : ""}

    </div>
  );
}

export default App;

function createCharacter(ebue: Character) {
  ebue.damage(75);
  ebue.weaponSlot1.card = new ScoutWeaponCard("Scum", "epic", 22, noSpecialSkill);
  ebue.weaponSlot2.card = new MassiveWeaponCard("Grdzaaa", "rare", 143, noSpecialSkill, 60);
  ebue.weaponSlot2.needsReload = true;
  ebue.defensiveConsumable.card = new MagicField();
  ebue.consumable1.card = new AmmoBag();
  ebue.consumable2.card = new Potion("Medium");
  ebue.throwable.card = new MagicSpear();
  ebue.helmet.card = new Helmet();
  ebue.bodyArmor.card = new BodyArmor();
  ebue.consumableBagSlot1.card = new ObstacleNulifier("mountain");
  ebue.consumableBagSlot2.card = new Teleport();
  ebue.throwableBagSlot.card = new SmokeBulb();
  return ebue;
}

function createEmoon() {
  return createCharacter(new Emoon());
}

function createArmazi() {
  return createCharacter(new Armazi());
}

function createMedea() {
  return createCharacter(new Medea());
}

function createTharsis() {
  return createCharacter(new Tharsis());
}

function createVaras() {
  return createCharacter(new Varas());
}

function createTsiva() {
  return createCharacter(new PrincessTsiva());
}

function createOctor() {
  return createCharacter(new Octor());
}

function createKruber() {
  return createCharacter(new Kruber());
}

function createDrain() {
  return createCharacter(new Dirain());
}

function createEbue() {
  return createCharacter(new Ebue());
}
