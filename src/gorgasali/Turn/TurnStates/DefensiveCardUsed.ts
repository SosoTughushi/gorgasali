import { CardCategory } from "../../Cards/Card";
import { Action } from "./Action";
import TurnEnded from "./TurnEnded";
import TurnStateBase from "./TurnStateBase";


export default class DefensiveCardUsed extends TurnStateBase {
    public state: "DefensiveCardUsed" = "DefensiveCardUsed";
    public order = 6;

    reloadWeapons() {
        return new TurnEnded(this.context);
    }


    manageBackpack() {
        return new TurnEnded(this.context);
    }


    shootEnemy() {
        return new TurnEnded(this.context);
    }
    

    getAvailableActions(): Action[] {
        return [ {
            type: "Reload Weapons",
            action: () => this.reloadWeapons()
        }, {
            type: "Manage backpack",
            action: () => this.manageBackpack()
        }]
    }
    
    getAvailabeCards(): CardCategory[] {
        return ["Weapon"];
    }
}
