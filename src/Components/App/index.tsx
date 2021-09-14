import { useState } from 'react';
import './App.css';
import Board from '../Board';
import CardComponent from '../Cards/Card/Index';
import Deck from '../../gorgasali/Cards/Deck';
import CharacterComponent from '../Character';
import Ebue from '../../gorgasali/Characters/Ebue';
import Tharsis from '../../gorgasali/Characters/Tharsis';
import MagicSpear from '../../gorgasali/Cards/Support/Throwable/MagicSpear';
import { Card } from '../../gorgasali/Cards/Card';
import Armazi from '../../gorgasali/Characters/Armazi';
import Character from '../../gorgasali/Characters/Character';
import BoardClass from '../../gorgasali/Board/board';
import Medea from '../../gorgasali/Characters/Medea';
import Varas from '../../gorgasali/Characters/Varas';
import PrincessTsiva from '../../gorgasali/Characters/PrincessTsiva';
import Octor from '../../gorgasali/Characters/Octor';
import Kruber from '../../gorgasali/Characters/Kruber';
import Dirain from '../../gorgasali/Characters/Dirain';
import Emoon from '../../gorgasali/Characters/Emoon';
import Compass from "../../gorgasali/Cards/Support/Consumable/MovementConsumables/Compass";
import Adrenaline from "../../gorgasali/Cards/Support/Consumable/MovementConsumables/Adrenaline";
import CharacterTileList from '../Character/CharacterTileList';
import Turn from "../Turn";
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import Initial from "../../gorgasali/Turn/TurnStates/Initial";
import TurnContext from '../../gorgasali/Turn/TurnContext';
import Potion from '../../gorgasali/Cards/Support/Consumable/Potion';
import { createCharacter } from './createCharacter';

function App() {

  const [board] = useState(() => {
    const b = new BoardClass();

    b.placeCharacter(5, 9, createCharacter(new Ebue()));
    b.placeCharacter(5, 11, createCharacter(new Armazi()));
    b.placeCharacter(24, 3, createCharacter(new Medea()));
    b.placeCharacter(26, 8, createCharacter(new Tharsis()));
    b.placeCharacter(13, 22, createCharacter(new Varas()));
    b.placeCharacter(11, 6, createCharacter (new PrincessTsiva()));
    b.placeCharacter(0, 16, createCharacter(new Octor()));
    b.placeCharacter(18, 2, createCharacter(new Kruber()));
    b.placeCharacter(23, 4, createCharacter(new Dirain()));
    b.placeCharacter(9, 0, createCharacter(new Emoon()));

    return b;
  });
  const [selecterCharacter, setSelectedCharacter] = useState<Character | undefined>()
  const createInitialTurnContext = () => {
    const previousLocations = new Set<number>();
    previousLocations.add(board.currentPlayerPosition);
    return { self: board.currentPlayer, board: board, usedCards: [], previousLocations };
  };
  const [turnContext, setTurnContext] = useState<TurnContext>(createInitialTurnContext)
  const [turnState, setTurnState] = useState<TurnStateMachine>(() => new Initial(turnContext));

  const onTurnChange = (newTurn: TurnStateMachine) => {
    if (newTurn.state === "TurnEnded") {
      board.nextPlayer();
      const newContext = createInitialTurnContext();
      setTurnContext(newContext);
      setTurnState(new Initial(newContext));
    } else {
      setTurnState(newTurn);
    }
    setTurnState(newTurn);
  }
  return (
    <div className="App">


      <Board
        board={board}
        selectedCharacter={selecterCharacter}
        turnContext={turnContext}
        turnState={turnState}
        onTurnStateChange={onTurnChange}
      />

      <div className="row">

        <div className="col-md-2">

          {/* <CharacterTileList
            characters={board.characters}
            onCharacterTileClick={character => setSelectedCharacter(character)}
            selectedCharacter={selecterCharacter}
            currentPlayer={board.currentPlayer} /> */}
        </div>
        <div className="col-md-5">
        </div>
        <div className="col-md-5">
          {/* <Turn turn={{ board: board, state: turnState, context: turnContext }} onTurnStateChange={onTurnChange} /> */}
        </div>
      </div>
      {selecterCharacter ? <CharacterComponent character={selecterCharacter} onTurnStateChange={(_) => { }} /> : ""}

    </div>
  );
}

export default App;


