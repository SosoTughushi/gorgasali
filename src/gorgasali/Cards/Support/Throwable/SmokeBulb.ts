import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import Throwable from "./Throwable";


export default class SmokeBulb extends Throwable {
    constructor() {
        super("Smoke bulb", new SmokeBulbSpecial(), undefined, undefined, undefined, undefined);
    }
}


class SmokeBulbSpecial extends CardSpecialSkill {
    use(context: TurnContext): void {
        throw new Error("Method not implemented.");
    }
    constructor() {
        super("Hide in smoke and unable enemies to shoot you");
    }
}
