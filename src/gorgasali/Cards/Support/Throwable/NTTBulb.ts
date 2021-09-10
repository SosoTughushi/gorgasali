import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import Throwable from "./Throwable";



export default class NTTBulb extends Throwable {
    constructor() {
        super("NTT bulb", new NTTBulbSpecial(), undefined, 3, undefined, undefined);
    }
}



export class NTTBulbSpecial extends CardSpecialSkill {
    use(context: TurnContext): void {
        throw new Error("Method not implemented.");
    }
    constructor() {
        super("Force enemies to reload weapons");
    }
}
