import { CardSpecialSkill } from "../Card";

export default class WeaponSpecialSkill extends CardSpecialSkill {

    constructor(text: string) {
        super(text);
    }
}

export class Roll7ForMaxDamage extends WeaponSpecialSkill {
    constructor() {
        super("Roll 7 for maximum damage");
    }
}

export class RollForExtraDamage extends WeaponSpecialSkill {
    public minRoll: number;
    public addedDamage: number;
    constructor(minRoll: number, addedDamage: number) {
        super("Roll " + minRoll + "+ for additional " + addedDamage + " damage")
        this.minRoll = minRoll;
        this.addedDamage = addedDamage;
    }
}

export class Roll4PlusToMove2ExtraSquares extends WeaponSpecialSkill {
    constructor() {
        super("Roll 4+ to move 2 extra squares");
    }
}

export class StandDiagonallyForExtra1DamagePerBullet extends WeaponSpecialSkill {
    constructor() {
        super("Stand diagonally for extra +1 damage per bullet");
    }
}

export class Roll5PlusForInstantReload extends WeaponSpecialSkill {
    constructor() {
        super("Roll 5+ for instant reload");
    }
}

export class LifeLeach extends WeaponSpecialSkill {
    constructor() {
        super("Life leech 15 health points");
    }
}

export class ArmorPenetration extends WeaponSpecialSkill {
    constructor() {
        super("Penetrates armor");
    }
}

export const noSpecialSkill = new WeaponSpecialSkill("No special skill");
export const roll7forMaxDamage = new Roll7ForMaxDamage();
export const roll4PlusToMove2ExtraSquares = new Roll4PlusToMove2ExtraSquares();
export const standDiagonallyForExtra1DamagePerBullet = new StandDiagonallyForExtra1DamagePerBullet();
export const roll5ForExtra5Damage = new RollForExtraDamage(5, 5);
export const roll5PlusForInstantReload = new Roll5PlusForInstantReload();
export const lifeLeach = new LifeLeach();
export const roll11PlusForExtra15Damage = new RollForExtraDamage(11, 15);
export const armorPenetration = new ArmorPenetration();


