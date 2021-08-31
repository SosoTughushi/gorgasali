import { CardSpecialSkill } from "../../Card";
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
    constructor() {
        super("Summons ball lightning to defend area");
    }
}
