import MovementDiceRolled from "./MovementDiceRolled";
import { UseHealingCard,  rollSingleDice } from "./turnStateMachine";
import TurnStateBase from "./TurnStateBase";
import AmmoBagUsed from "./AmmoBagUsed";
import HealingCardUsed from "./HealingCardUsed";
import { CardCategory } from "../../Cards/Card";
import { Action } from "./Action";
import AmmoBag from "../../Cards/Support/Consumable/AmmoBag";


export default class Initial extends TurnStateBase {
    public state: "Initial" = "Initial";
    public order = 0;
    useHealingCard(action: UseHealingCard): HealingCardUsed {
        return new HealingCardUsed(this.context);
    }

    useAmmoBag(card: AmmoBag): AmmoBagUsed {
        return new AmmoBagUsed(this.context);
    }

    rollDice(): MovementDiceRolled {
        this.context.movementDice = {
            dice1: rollSingleDice(),
            dice2: rollSingleDice()
        };
        this.context.movementDiceTotal = this.context.movementDice.dice1 + this.context.movementDice.dice2;
        return new MovementDiceRolled(this.context);
    }

    getAvailableActions(): Action[] {
        return [{
            type: "Roll Dice",
            action: () => this.rollDice()
        }]
    }
    getAvailabeCards(): CardCategory[] {
        return ["HealingPotion", "AmmoBag"];
    }
}
