import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import { Defensive } from "./Defensive";

export default class Barrier extends Defensive {
    constructor() {
        super("Barrier",
            "epic",
            "Defensive",
            new BarrierSpecialSkill(),
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
}



export class BarrierSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("Blocks movement and targeting");
    }
    
    use(context: TurnContext): void {
        // board.placeLightningBall(context.targetIndex)
        throw new Error("Method not implemented.");
    }
}
