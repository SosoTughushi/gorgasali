import Initial from "./Initial";
import MovementDiceRolled from "./MovementDiceRolled";
import TurnStateBase from "./TurnStateBase";


export default class AmmoBagUsed extends TurnStateBase {

    public state: "AmmoBagUsed" = "AmmoBagUsed";
    public order = 2;
    rollDice() {
        return new Initial(this.context).rollDice();
    }

    getAvailableActions() {
        return [{
            name: "Roll Dice",
            action: () => this.rollDice()
        }]
    }
}
