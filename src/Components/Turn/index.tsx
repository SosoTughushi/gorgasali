import Character, { UsableCards } from "../Character";
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TurnClass from '../../gorgasali/Turn/Turn';
import CardComponent from '../Cards/Card/Index';
import { Card } from '../../gorgasali/Cards/Card';
import CardSlot from '../../gorgasali/Characters/CardSlot';
import ChangesTurnState from "./ChangesTurnState";

export default function Turn({ turn, onTurnStateChange }: TurnProps) {
    const state = turn.state;
    let handlers: UsableCards = {};

    const actions: JSX.Element[] = [];
    const addAction = (name: string, nextState: () => TurnStateMachine) => {
        const button = <Button onClick={() => {
            const newState = nextState();
            onTurnStateChange(newState);
        }}>{name}</Button>;
        actions.push(button);
    }
    switch (state.state) {
        case "Initial":
            handlers = {
                healingPotion: true,
                ammoBag: true
            };
            addAction("Roll Dice", () => state.rollDice());
            break;
        case "HealingCardUsed":
            addAction("Roll Dice", () => state.rollDice());
            break;
        case "AmmoBagUsed":
            addAction("Roll Dice", () => state.rollDice());
            break;
        case "MovementDiceRolled":
            handlers = { movementCard: true };
            addAction("Skip", () => state.skipMovement());
            break;
        case "Moved":
            handlers = {
                defensiveCard: true,
                throwableCard: true,
                weaponExtensionCard: true,
                loadedWeapons: true
            }
            addAction("Reload", () => state.reloadWeapons({}));
            addAction("Manage Backpack", () => state.manageBackpack({}));
            break;
        case "DefensiveCardUsed":
            handlers = {
                loadedWeapons: true
            }

            addAction("Reload", () => state.reloadWeapons({}));
            addAction("Manage Backpack", () => state.manageBackpack({}));
            break;
        case "ThrowableCardUsed":
            handlers = {
                loadedWeapons: true
            }

            addAction("Reload", () => state.reloadWeapons({}));
            addAction("Manage Backpack", () => state.manageBackpack({}));
            break;
        case "WeaponExtensionCardUsed":
            handlers = {
                loadedWeapons: true
            }
            break;
    }

    const toCardComponent = (card: Card) => {
        const slot = new CardSlot("Whatever");
        slot.card = card;
        return <CardComponent cardSlot={slot} needsReload={false} />
    }

    return <div>
        <div className="row">
            <div className="col-md-offset-6 col-md-6 " >
                <h2>{state.state} </h2>
                <ProgressBar now={state.order / 9 * 100} />
                <br />
            </div>
        </div>

        {actions}
        <br />
        {turn.context.movementDice &&
            <div>
                dice1: <h3>{turn.context.movementDice.dice1}</h3>
                dice1: <h3>{turn.context.movementDice.dice2}</h3>
                available move points: <h3>{turn.context.movementDiceTotal}</h3>
            </div>}
        <Character character={turn.board.currentPlayer} usableCards={handlers} turnContext={turn.context} onTurnStateChange={onTurnStateChange} />
        <br />
        {turn.context.usedCards.map(toCardComponent)}
    </div>
}
interface TurnProps extends ChangesTurnState {
    turn: TurnClass;
}

