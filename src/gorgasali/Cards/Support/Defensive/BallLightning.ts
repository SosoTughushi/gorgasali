import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import { Defensive } from "./Defensive";

export default class BallLightning extends Defensive {
    constructor() {
        super(
            "Ball lightning",
            "legendary",
            "Defensive",
            new BallLIghtningSpecialSkill(),
            undefined,
            3,
            { isFixed: true, value: 35 },
            undefined);
    }
}


export class BallLIghtningSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        // board.placeLightningBall(context.targetIndex)
        throw new Error("Method not implemented.");
    }
    constructor() {
        super("Summons ball lightning to defend area");
    }
}
