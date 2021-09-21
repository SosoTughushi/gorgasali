import Character from "../Character";
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CardOutcome } from "../../gorgasali/Turn/TurnContext";
import UsedCard from "./UsedCard";
import { TurnProps } from "./TurnProps";
import MovementInfo from "./MovementInfo";
import { CardSlotBase, WeaponSlot } from "../../gorgasali/Characters/CardSlot";


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

    function isCardSlotClickable(slot: CardSlotBase) {
        if (!slot.card) {
            return false;
        }

        if (slot instanceof WeaponSlot) {
            if (slot.needsReload) {
                return false;
            }
        }

        if (slot.isBag) {
            return false;
        }

        if (!availableCards.includes(slot.card.category)) {
            return false;
        }

        if (!slot.card.canUse(turn.context)) {
            return false;
        }

        return true;
    }

    function onCardSlotClick(slot: CardSlotBase) {
        if (!slot.card) {
            return;
        }
        const card = slot.card;

        turn.context?.usedCards.push({ usedCard: card });

        const result = card.use(turn.context);
        if (slot instanceof WeaponSlot) {
            slot.needsReload = true;
        } else {
            slot.card = undefined;
        }

        if (result) {
            onTurnStateChange(result);
        }
    }

    return <div>
        <Character
            character={turn.board.currentPlayer}
            clickableCondition={isCardSlotClickable}
            onCardSlotClick={onCardSlotClick} />
        <br />
        <div className="row">
            {turn.context.usedCards.map(toCardComponent)}

        </div>
    </div>
}

