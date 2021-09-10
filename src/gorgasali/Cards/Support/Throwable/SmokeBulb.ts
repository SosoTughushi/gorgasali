import TurnContext from "../../../Turn/TurnContext";
import Throwable from "./Throwable";


export default class SmokeBulb extends Throwable {
    constructor() {
        super("Smoke bulb", "Hide in smoke and unable enemies to shoot you", undefined, undefined, undefined, undefined);
    }
    use(context: TurnContext): void {
    }
}