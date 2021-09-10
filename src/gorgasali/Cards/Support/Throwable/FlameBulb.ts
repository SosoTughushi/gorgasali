import TurnContext from "../../../Turn/TurnContext";
import WeaponDamage from "../../Weapons/WeaponDamage";
import Throwable from "./Throwable";

export default class FlameBulb extends Throwable {
    constructor() {
        super("Flame bulb", "Explosive area damage", 2, 2, { isFixed: true, value: 40 }, 9);
    }

    use(context: TurnContext): void {
    }
}

