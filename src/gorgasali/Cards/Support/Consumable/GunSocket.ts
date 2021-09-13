import TurnContext from "../../../Turn/TurnContext";
import WeaponExtensionCardUsed from "../../../Turn/TurnStates/WeaponExtensionCardUsed";
import { WeaponType } from "../../Weapons/WeaponType";
import { Consumable } from "./Consumable";



export default abstract class GunSocket extends Consumable {
    constructor(public targetGunType: WeaponType, name: string, specialSkill: string) {
        super(name, "rare", "Consumable", specialSkill, undefined, undefined, undefined, undefined);
    }

    canUse(context: TurnContext) {
        if (context.self.weaponSlot1.card
            && !context.self.weaponSlot1.needsReload
            && context.self.weaponSlot1.card.type === this.targetGunType) {
            return true;
        }

        if (context.self.weaponSlot2.card
            && !context.self.weaponSlot2.needsReload
            && context.self.weaponSlot2.card.type === this.targetGunType) {
            return true;
        }
        return false;
    }
}


export class SecondChance extends GunSocket {
    constructor() {
        super("MassiveWeapon", "Second chance", "For massive weapons if you miss, roll again")
    }
    use(context: TurnContext): WeaponExtensionCardUsed {
        context.gunSockets = {
            secondChanceActive: this
        }
        return new WeaponExtensionCardUsed(context);
    }
}

export class ExtraSix extends GunSocket {
    constructor() {
        super("SixShooter", "Extra six", "For six shooters Additional dice for shooting")
    }

    use(context: TurnContext): WeaponExtensionCardUsed {
        context.gunSockets = {
            extraSixActive: this
        }
        return new WeaponExtensionCardUsed(context);
    }
}

export class StrikeOption extends GunSocket {
    constructor() {
        super("Striker", "Strike option", "FOr strikers Reroll any dice")
    }
    use(context: TurnContext): WeaponExtensionCardUsed {
        context.gunSockets = { strikeOptionActive: this }
        return new WeaponExtensionCardUsed(context);
    }
}

export class EagleEye extends GunSocket {
    constructor() {
        super("Scout", "Eagle eye", "For scouts 2 units less to hit")
    }

    use(context: TurnContext): WeaponExtensionCardUsed {
        context.gunSockets = { eagleEyeActive: this }
        return new WeaponExtensionCardUsed(context);
    }
}