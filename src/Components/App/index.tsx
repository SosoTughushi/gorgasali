import { useState } from 'react';
import './App.scss';
import Board from '../Board';
import Deck from '../../gorgasali/Cards/Deck';
import CharacterComponent from '../Character';
import Ebue from '../../gorgasali/Characters/Ebue';
import Tharsis from '../../gorgasali/Characters/Tharsis';
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
import CharacterTileList from '../Character/CharacterTileList';
import Turn from "../Turn/Index";
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import Initial from "../../gorgasali/Turn/TurnStates/Initial";
import TurnContext from '../../gorgasali/Turn/TurnContext';
import { createCharacter } from './createCharacter';
import SidePanel from '../SidePanel';
import CharacterTile from '../Character/CharacterTile';
import Loot from '../Loot';

function App() {

  const [board] = useState(() => {
    const b = new BoardClass();

    b.placeCharacter(5, 9, createCharacter(new Ebue()));
    b.placeCharacter(5, 11, createCharacter(new Armazi()));
    b.placeCharacter(24, 3, createCharacter(new Medea()));
    b.placeCharacter(26, 8, createCharacter(new Tharsis()));
    b.placeCharacter(13, 22, createCharacter(new Varas()));
    b.placeCharacter(11, 6, createCharacter(new PrincessTsiva()));
    b.placeCharacter(4, 16, createCharacter(new Octor()));
    b.placeCharacter(18, 2, createCharacter(new Kruber()));
    b.placeCharacter(23, 4, createCharacter(new Dirain()));
    b.placeCharacter(9, 4, createCharacter(new Emoon()));

    return b;
  });
  const [selecterCharacter, setSelectedCharacter] = useState<Character | undefined>()
  const createInitialTurnContext = () => {
    const previousLocations = new Set<number>();
    previousLocations.add(board.currentPlayerPosition);
    return { self: board.currentPlayer, board: board, usedCards: [], previousLocations, deck: new Deck() };
  };
  const [turnContext, setTurnContext] = useState<TurnContext>(createInitialTurnContext)
  const [turnState, setTurnState] = useState<TurnStateMachine>(() => new Initial(turnContext));

  const onTurnChange = (newTurn: TurnStateMachine) => {
    if (newTurn.state === "TurnEnded") {
      board.nextPlayer();
      const newContext = createInitialTurnContext();
      const newState = new Initial(newContext);
      setTurnContext(newContext);
      setTurnState(newState);
    } else {
      setTurnState(newTurn);
    }
  }
  return (
    <div className="App">
      <Loot onTurnStateChange={onTurnChange} state={turnState} />

      <SidePanel collapsedContent={<CharacterTileList
        characters={board.characters}
        onCharacterTileClick={character => setSelectedCharacter(character)}
        selectedCharacter={selecterCharacter}
        currentPlayer={board.currentPlayer} />} orientation="right" expanded={false} transparent={true}   >
      </SidePanel>

      <SidePanel
        collapsedContent={<table>
          <tbody>
            <tr>
              <td>
                <CharacterTile character={board.currentPlayer} onCharacterTileClick={() => { }} isCurrentPlayer={true} />
              </td>
              <td>
                {turnContext.target && <CharacterTile character={turnContext.target} onCharacterTileClick={() => { }} isCurrentPlayer={true} />}
              </td>
            </tr>
          </tbody>
        </table>}
        orientation="top"
        expanded={false}
        transparent={true} />

      <Board
        board={board}
        selectedCharacter={selecterCharacter}
        turnContext={turnContext}
        turnState={turnState}
        onTurnStateChange={onTurnChange}
      />

      <Turn turn={{ board: board, state: turnState, context: turnContext }} onTurnStateChange={onTurnChange} />


      {selecterCharacter ? <CharacterComponent character={selecterCharacter} /> : ""}

    </div>
  );
}

export default App;


