import WeaponSpecialSkill from "./WeaponSpecialSkill";
import { Card } from "../Card";
import { WeaponType } from "./WeaponType";
import { CardLevel } from "../CardLevel";
import WeaponDamage from "./WeaponDamage";
import { ScoutRangeMinRoll } from "./ScoutWeaponCard";

export default abstract class WeaponCard extends Card {

    constructor(
        public name: string, 
        public type: WeaponType, 
        public level: CardLevel, 
        diceCount: number, 
        range: number, 
        public specialSkill: WeaponSpecialSkill,
        damage: WeaponDamage,
        criteria: number | ScoutRangeMinRoll[]| undefined) {
        super(name, level, type, specialSkill.text, diceCount, range, damage, criteria);
    }
}




