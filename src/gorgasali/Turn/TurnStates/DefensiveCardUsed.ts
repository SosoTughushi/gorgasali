import TurnEnded from "./TurnEnded";
import { RealoadWeapons, ManageBackpack } from "./turnStateMachine";
import TurnStateBase from "./TurnStateBase";


export default class DefensiveCardUsed extends TurnStateBase {
    public state: "DefensiveCardUsed" = "DefensiveCardUsed";
    public order = 6;

    reloadWeapons(action: RealoadWeapons) {
        return new TurnEnded(this.context);
    }


    manageBackpack(action: ManageBackpack) {
        return new TurnEnded(this.context);
    }


    shootEnemy() {
        return new TurnEnded(this.context);
    }
}
