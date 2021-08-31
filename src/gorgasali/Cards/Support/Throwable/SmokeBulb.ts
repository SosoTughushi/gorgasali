import { CardSpecialSkill } from "../../Card";
import Throwable from "./Throwable";


export default class SmokeBulb extends Throwable {
    constructor() {
        super("Smoke bulb", new SmokeBulbSpecial(), undefined, undefined, undefined, undefined);
    }
}


class SmokeBulbSpecial extends CardSpecialSkill {
    constructor() {
        super("Hide in smoke and unable enemies to shoot you");
    }
}
