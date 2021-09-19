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
    

    getAvailableActions() {
        return [ {
            name: "Reload Weapons",
            action: () => this.reloadWeapons()
        }, {
            name: "Manage backpack",
            action: () => this.manageBackpack()
        }]
    }
}
