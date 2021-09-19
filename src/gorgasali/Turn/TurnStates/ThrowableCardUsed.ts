import { CardCategory } from "../../Cards/Card";
import { Action } from "./Action";
import TurnEnded from "./TurnEnded";
import TurnStateBase from "./TurnStateBase";


export default class ThrowableCardUsed extends TurnStateBase {
    public state: "ThrowableCardUsed" = "ThrowableCardUsed";
    public order = 7;

    reloadWeapons() {
        return new TurnEnded(this.context);
    }


    manageBackpack() {
        return new TurnEnded(this.context);
    }


    shootEnemy() {
        return new TurnEnded(this.context);
    }

    getAvailabeCards(): CardCategory[] {
        return ["Weapon"];
    }

    getAvailableActions(): Action[] {
        return [{
            type: "Reload Weapons",
            action: () => this.reloadWeapons()
        }, {
            type: "Manage backpack",
            action: () => this.manageBackpack()
        }]
    }
}
