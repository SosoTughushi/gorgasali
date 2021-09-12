import TurnEnded from "./TurnEnded";
import TurnStateBase from "./TurnStateBase";


export default class WeaponExtensionCardUsed extends TurnStateBase {
    public state: "WeaponExtensionCardUsed" = "WeaponExtensionCardUsed";
    public order = 8;

    shootEnemy(action: ShootEnemy) {
        return new TurnEnded(this.context);
    }
}

 type ShootEnemy = {
}
