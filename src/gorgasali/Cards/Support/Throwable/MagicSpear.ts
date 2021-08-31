import { CardSpecialSkill } from "../../Card";
import WeaponDamage from "../../Weapons/WeaponDamage";
import Throwable from "./Throwable";

export default class MagicSpear extends Throwable {
    constructor() {
        super("Magic spear", new MagicSpearSpecial(), 1, 6, { isFixed: true, value: 60 }, undefined);
    }
}



export class MagicSpearSpecial extends CardSpecialSkill {
    constructor() {
        super("ROll the exact number of distance to hit");
    }
}
