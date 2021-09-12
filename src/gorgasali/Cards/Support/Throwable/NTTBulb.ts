import { isAnyoneInRange } from "../../../Board/destinations/getShootingRange";
import TurnContext from "../../../Turn/TurnContext";
import Throwable from "./Throwable";



export default class NTTBulb extends Throwable {
    constructor() {
        super("NTT bulb", "Force enemies to reload weapons", undefined, 3, undefined, undefined);
    }
    canUse(context: TurnContext): boolean {
        if (isAnyoneInRange.bind(context.board)(3)) {
            return true;
        }
        return false;
    }
    use(context: TurnContext): void {
    }
}
