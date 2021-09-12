import TurnEnded from "./TurnEnded";
import { RealoadWeapons, ManageBackpack } from "./turnStateMachine";
import TurnStateBase from "./TurnStateBase";


export default class ThrowableCardUsed extends TurnStateBase {
    public state: "ThrowableCardUsed" = "ThrowableCardUsed";
    public order = 7;

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
