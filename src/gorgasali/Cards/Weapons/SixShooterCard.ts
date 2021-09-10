
import WeaponSpecialSkill from "./WeaponSpecialSkill";
import { noSpecialSkill, roll7forMaxDamage, roll4PlusToMove2ExtraSquares } from "./WeaponSpecialSkill";
import { CardLevel } from "../CardLevel";
import WeaponCard from "./WeaponCard";
import TurnContext from "../../Turn/TurnContext";

export default class SixShooterCard extends WeaponCard {
    constructor(
        name: string,
        level: CardLevel,
        diceCount: number,
        damageMultiplier: number,
        specialSkill: WeaponSpecialSkill) {
        super(name, "SixShooter", level, diceCount, 2, specialSkill, { isFixed: false, value: damageMultiplier }, undefined);
    }
    
    use(context: TurnContext): void {
        throw new Error("Method not implemented.");
    }
}

export const scratch = new SixShooterCard("Scratch", "common", 1, 5, noSpecialSkill);
export const elva = new SixShooterCard("Elva", "rare", 1, 6, noSpecialSkill);
export const gemini = new SixShooterCard("Gemini", "epic", 2, 4, roll7forMaxDamage);
export const dobergun = new SixShooterCard("Dobergun", "legendary", 1, 9, roll4PlusToMove2ExtraSquares);
