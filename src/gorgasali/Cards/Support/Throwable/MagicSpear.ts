import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import WeaponDamage from "../../Weapons/WeaponDamage";
import Throwable from "./Throwable";

export default class MagicSpear extends Throwable {
    constructor() {
        super("Magic spear", new MagicSpearSpecial(), 1, 6, { isFixed: true, value: 60 }, undefined);
    }
}



export class MagicSpearSpecial extends CardSpecialSkill {
    use(context: TurnContext): void {
        throw new Error("Method not implemented.");
    }
    constructor() {
        super("Roll the exact number of distance to hit");
    }
}
