import { CardSpecialSkill } from "../../Card";
import Throwable from "./Throwable";



export default class NTTBulb extends Throwable {
    constructor() {
        super("NTT bulb", new NTTBulbSpecial(), undefined, 3, undefined, undefined);
    }
}



export class NTTBulbSpecial extends CardSpecialSkill {
    constructor() {
        super("Force enemies to reload weapons");
    }
}
