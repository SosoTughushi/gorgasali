import WeaponSpecialSkill, { noSpecialSkill, standDiagonallyForExtra1DamagePerBullet, roll5ForExtra5Damage } from "./WeaponSpecialSkill";
import { CardLevel } from "../CardLevel";
import WeaponCard from "./WeaponCard";
import TurnContext from "../../Turn/TurnContext";


export default class StrikerWeaponCard extends WeaponCard {
    constructor(name: string,
        level: CardLevel,
        diceCount: number,
        damageMultiplier: number,
        specialSkill: WeaponSpecialSkill) {

        super(name, "Striker", level, diceCount, 3, specialSkill, {isFixed:false, value:damageMultiplier}, undefined);
    }
    
    use(context: TurnContext): void {
        throw new Error("Method not implemented.");
    }
}

export const lynx = new StrikerWeaponCard("Lynx", "common", 3, 3, noSpecialSkill);
export const mantis = new StrikerWeaponCard("Mantis", "rare", 5, 2, noSpecialSkill);
export const ibex = new StrikerWeaponCard("Ibex", "epic", 3, 3, standDiagonallyForExtra1DamagePerBullet);
export const kbraus = new StrikerWeaponCard("K'Braus", "legendary", 5, 2, roll5ForExtra5Damage);