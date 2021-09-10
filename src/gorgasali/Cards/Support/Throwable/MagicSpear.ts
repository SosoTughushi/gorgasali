import TurnContext from "../../../Turn/TurnContext";
import WeaponDamage from "../../Weapons/WeaponDamage";
import Throwable from "./Throwable";

export default class MagicSpear extends Throwable {
    constructor() {
        super("Magic spear", "Roll the exact number of distance to hit", 1, 6, { isFixed: true, value: 60 }, undefined);
    }

    use(context: TurnContext): void {
    }
}
