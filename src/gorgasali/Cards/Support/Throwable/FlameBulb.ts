import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import WeaponDamage from "../../Weapons/WeaponDamage";
import Throwable from "./Throwable";

export default class FlameBulb extends Throwable {
    constructor() {
        super("Flame bulb", new FlameBulbSpecial(), 2, 2, { isFixed: true, value: 40 }, 9);
    }
}


class FlameBulbSpecial extends CardSpecialSkill {
    use(context: TurnContext): void {
        throw new Error("Method not implemented.");
    }
    constructor() {
        super("Explosive area damage");
    }
}
