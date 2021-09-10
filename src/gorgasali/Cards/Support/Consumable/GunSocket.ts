import TurnContext from "../../../Turn/TurnContext";
import { WeaponType } from "../../Weapons/WeaponType";
import { Consumable } from "./Consumable";



export default abstract class GunSocket extends Consumable {
    constructor(public targetGunType: WeaponType, name: string, specialSkill: string) {
        super(name, "rare", "Consumable", specialSkill, undefined, undefined, undefined, undefined);
    }
}


export class SecondChance extends GunSocket {
    constructor() {
        super("MassiveWeapon", "Second chance", "For massive weapons if you miss, roll again")
    }
    use(context: TurnContext): void {
        context.gunSockets = {
            secondChanceActive: this
        }
    }
}

export class ExtraSix extends GunSocket {
    constructor() {
        super("SixShooter", "Extra six", "For six shooters Additional dice for shooting")
    }

    use(context: TurnContext): void {
        context.gunSockets = {
            extraSixActive: this
        }
    }
}

export class StrikeOption extends GunSocket {
    constructor() {
        super("Striker", "Strike option", "FOr strikers Reroll any dice")
    }
    use(context: TurnContext): void {
        context.gunSockets = { strikeOptionActive: this }
    }
}

export class EagleEye extends GunSocket {
    constructor() {
        super("Scout", "Eagle eye", "For scouts 2 units less to hit")
    }

    use(context: TurnContext): void {
        context.gunSockets = { eagleEyeActive: this }
    }
}