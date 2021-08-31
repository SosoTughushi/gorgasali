import { CardSpecialSkill } from "../../Card";
import { Defensive } from "./Defensive";

export default class MagicField extends Defensive {
    constructor() {
        super("Magic field", "rare", "Defensive", new MagicFieldSpecialSkill(), 
        undefined, undefined, undefined, undefined)
    }
}

class MagicFieldSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("Blocks half of the all incoming damage");
    }
}