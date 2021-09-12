import Initial from "./Initial";
import MovementDiceRolled from "./MovementDiceRolled";
import TurnStateBase from "./TurnStateBase";


export default class HealingCardUsed extends TurnStateBase {
    public state: "HealingCardUsed" = "HealingCardUsed";
    public order = 1;

    rollDice() {
        return new Initial(this.context).rollDice();
    }
}
