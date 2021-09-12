import { isAnyoneInRange } from "../../../Board/destinations/getShootingRange";
import TurnContext from "../../../Turn/TurnContext";
import Throwable from "./Throwable";


export default class SmokeBulb extends Throwable {
    constructor() {
        super("Smoke bulb", "Hide in smoke and unable enemies to shoot you", undefined, undefined, undefined, undefined);
    }
    
    canUse(context: TurnContext): boolean {
        return true;
    }
    
    use(context: TurnContext): void {
    }
}