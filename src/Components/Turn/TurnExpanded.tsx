import Character from "../Character";
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CardOutcome } from "../../gorgasali/Turn/TurnContext";
import UsedCard from "./UsedCard";
import { TurnProps } from "./TurnProps";
import MovementInfo from "./MovementInfo";


export default function Turn({ turn, onTurnStateChange }: TurnProps) {
    const toCardComponent = (outcome: CardOutcome) => {
        return <div className="col-md-3">
            <UsedCard
                card={outcome.usedCard}
                diceResults={outcome.diceResults}
                successfull={outcome.successfull} />
        </div>

    }

    const availableCards = turn.state.getAvailabeCards();

    return <div>
        <Character
            character={turn.board.currentPlayer}
            usableCards={availableCards}
            turnContext={turn.context}
            turnState={turn.state}
            onTurnStateChange={onTurnStateChange} />
        <br />
        <div className="row">
            {turn.context.usedCards.map(toCardComponent)}

        </div>
    </div>
}
