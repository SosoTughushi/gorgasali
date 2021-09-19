import Character, { UsableCards } from "../Character";
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CardOutcome } from "../../gorgasali/Turn/TurnContext";
import UsedCard from "./UsedCard";
import { TurnProps } from "./TurnProps";


export default function Turn({ turn, onTurnStateChange }: TurnProps) {
    const state = turn.state;
    let handlers: UsableCards = {};

    const actions: JSX.Element[] = [];

    const turnActions = turn.state.getAvailableActions();
    for (let i = 0; i < turnActions.length; i++) {
        const action = turnActions[i];
        const button = <Button onClick={() => {
            const newState = action.action();
            onTurnStateChange(newState);
        }}>{action.name}</Button>;
        actions.push(button);
    }

    switch (state.state) {
        case "Initial":
            handlers = {
                healingPotion: true,
                ammoBag: true
            };
            break;
        case "HealingCardUsed":
            break;
        case "AmmoBagUsed":
            break;
        case "MovementDiceRolled":
            handlers = { movementCard: true };
            break;
        case "MovementCardUsed":
            break;
        case "Moved":
            handlers = {
                defensiveCard: true,
                throwableCard: true,
                weaponExtensionCard: true,
                loadedWeapons: true
            }
            break;
        case "DefensiveCardUsed":
            handlers = {
                loadedWeapons: true
            }

            break;
        case "ThrowableCardUsed":
            handlers = {
                loadedWeapons: true
            }
            break;
        case "WeaponExtensionCardUsed":
            handlers = {
                loadedWeapons: true
            }
            break;
    }

    const toCardComponent = (outcome: CardOutcome) => {
        return <div className="col-md-3">
            <UsedCard
                card={outcome.usedCard}
                diceResults={outcome.diceResults}
                successfull={outcome.successfull} />
        </div>

    }

    return <div>
        {actions}
        <br />
        {turn.context.movementDice &&
            <div>
                dice1: <h3>{turn.context.movementDice.dice1}</h3>
                dice1: <h3>{turn.context.movementDice.dice2}</h3>
                available move points: <h3>{turn.context.movementDiceTotal}</h3>
            </div>}
        <Character 
            character={turn.board.currentPlayer} 
            usableCards={handlers} 
            turnContext={turn.context} 
            turnState={turn.state}
            onTurnStateChange={onTurnStateChange} />
        <br />
        <div className="row">
            {turn.context.usedCards.map(toCardComponent)}

        </div>
    </div>
}

