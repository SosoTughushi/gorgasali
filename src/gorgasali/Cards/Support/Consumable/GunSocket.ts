import { CardSpecialSkill } from "../../Card";
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

class SecondChanceSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("FOr massive weapons if you miss, roll again");
    }
}

export class ExtraSix extends GunSocket {
    constructor() {
        super("SixShooter", "Extra six", new ExtraSixSpecialSkill())
    }
}

class ExtraSixSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("For six shooters Additional dice for shooting");
    }
}

export class StrikeOption extends GunSocket {
    constructor() {
        super("Striker", "Strike option", new StrikeOptionSpecialSkill())
    }
}

class StrikeOptionSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("FOr strikers Reroll any dice");
    }
}

export class EagleEye extends GunSocket {
    constructor() {
        super("Scout", "Eagle eye", new EagleEyeSpecialSkill())
    }
}

class EagleEyeSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("For scouts 2 units less to hit");
    }
}