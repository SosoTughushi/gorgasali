import TurnContext from "../../../Turn/TurnContext";
import Throwable from "./Throwable";



export default class NTTBulb extends Throwable {
    constructor() {
        super("NTT bulb", "Force enemies to reload weapons", undefined, 3, undefined, undefined);
    }
    use(context: TurnContext): void {
    }
}
