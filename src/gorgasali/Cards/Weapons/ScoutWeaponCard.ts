import WeaponSpecialSkill, { roll11PlusForExtra15Damage, armorPenetration } from "./WeaponSpecialSkill";
import { CardLevel } from "../CardLevel";
import WeaponCard from "./WeaponCard";


export type ScoutRangeMinRoll = {
    range: number;
    minRoll: number;
}

export default class ScoutWeaponCard extends WeaponCard {
    constructor(
        name: string,
        level: CardLevel,
        damage: number,
        specialSkill: WeaponSpecialSkill
    ) {
        super(name, "Scout", level, 2, 4, specialSkill, { isFixed: true, value: damage }, [
            {
                range: 1,
                minRoll: 11
            },
            {
                range: 2,
                minRoll: 7
            },
            {
                range: 3,
                minRoll: 6
            },
            {
                range: 4,
                minRoll: 9
            }]);
    }
}

export const kondor = new ScoutWeaponCard("Kondor", "epic", 45, roll11PlusForExtra15Damage);
export const breathold = new ScoutWeaponCard("Breathold", "legendary", 50, armorPenetration);