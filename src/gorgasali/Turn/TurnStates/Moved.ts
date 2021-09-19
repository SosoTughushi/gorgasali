import TurnEnded from "./TurnEnded";
import { UseDefensiveCard, UseThrowableCard, UseWeaponExtensionCard } from "./turnStateMachine";
import TurnStateBase from "./TurnStateBase";
import WeaponExtensionCardUsed from "./WeaponExtensionCardUsed";
import ThrowableCardUsed from "./ThrowableCardUsed";
import DefensiveCardUsed from "./DefensiveCardUsed";
import { CardCategory } from "../../Cards/Card";
import { Action } from "./Action";


export default class Moved extends TurnStateBase {
    public state: "Moved" = "Moved";
    public order = 5;

    useDefensiveCard(action: UseDefensiveCard) {
        return new DefensiveCardUsed(this.context);
    }
    useThrowableCard(action: UseThrowableCard) {
        return new ThrowableCardUsed(this.context);
    }

    useWeaponExtensionCard(action: UseWeaponExtensionCard) {
        return new WeaponExtensionCardUsed(this.context);
    }

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
        return [{
            type: "Reload Weapons",
            action: () => this.reloadWeapons()
        }, {
            type: "Manage backpack",
            action: () => this.manageBackpack()
        }]
    }

    getAvailabeCards(): CardCategory[] {
        return ["Defensive", "Throwable", "WeaponExtension", "Weapon"];
    }
}
