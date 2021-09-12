import { isAnyoneInRange } from "../../../Board/destinations/getShootingRange";
import TurnContext from "../../../Turn/TurnContext";
import WeaponDamage from "../../Weapons/WeaponDamage";
import Throwable from "./Throwable";

export default class MagicSpear extends Throwable {

    canUse(context: TurnContext): boolean {
        if (isAnyoneInRange.bind(context.board)(6)) {
            return true;
        }
        return false;
    }

    constructor() {
        super("Magic spear", "Roll the exact number of distance to hit", 1, 6, { isFixed: true, value: 60 }, undefined);
    }

    use(context: TurnContext): void {
    }
}
