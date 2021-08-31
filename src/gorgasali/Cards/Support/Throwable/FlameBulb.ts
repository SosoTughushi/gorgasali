import { CardSpecialSkill } from "../../Card";
import WeaponDamage from "../../Weapons/WeaponDamage";
import Throwable from "./Throwable";

export default class FlameBulb extends Throwable {
    constructor() {
        super("Flame bulb", new FlameBulbSpecial(), 2, 2, { isFixed: true, value: 40 }, 9);
    }
}


class FlameBulbSpecial extends CardSpecialSkill {
    constructor() {
        super("Explosive area damage");
    }
}
