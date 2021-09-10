import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import { WeaponType } from "../../Weapons/WeaponType";
import { Consumable } from "./Consumable";



export default abstract class GunSocket extends Consumable {
    constructor(public targetGunType: WeaponType, name: string, specialSkill: CardSpecialSkill) {
        super(name, "rare", "Consumable", specialSkill, undefined, undefined, undefined, undefined);
    }
}


export class SecondChance extends GunSocket {
    constructor() {
        super("MassiveWeapon", "Second chance", new SecondChanceSpecialSkill())
    }
}

export class SecondChanceSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        context.gunSockets = {
            secondChanceActive: this
        }
    }
    constructor() {
        super("For massive weapons if you miss, roll again");
    }
}

export class ExtraSix extends GunSocket {
    constructor() {
        super("SixShooter", "Extra six", new ExtraSixSpecialSkill())
    }
}

export class ExtraSixSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        context.gunSockets = {
            extraSixActive: this
        }
    }
    constructor() {
        super("For six shooters Additional dice for shooting");
    }
}

export class StrikeOption extends GunSocket {
    constructor() {
        super("Striker", "Strike option", new StrikeOptionSpecialSkill())
    }
}

export class StrikeOptionSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        context.gunSockets = { strikeOptionActive: this }
    }
    constructor() {
        super("FOr strikers Reroll any dice");
    }
}

export class EagleEye extends GunSocket {
    constructor() {
        super("Scout", "Eagle eye", new EagleEyeSpecialSkill())
    }
}

export class EagleEyeSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        context.gunSockets = { eagleEyeActive: this }
    }
    constructor() {
        super("For scouts 2 units less to hit");
    }
}