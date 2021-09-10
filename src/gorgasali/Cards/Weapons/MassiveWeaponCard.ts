import WeaponSpecialSkill, { noSpecialSkill, roll5PlusForInstantReload, lifeLeach } from "./WeaponSpecialSkill";
import { CardLevel } from "../CardLevel";
import WeaponCard from "./WeaponCard";
import TurnContext from "../../Turn/TurnContext";



export default class MassiveWeaponCard extends WeaponCard {
    use(context: TurnContext): void {
    }
    constructor(
        name: string,
        level: CardLevel,
        damage: number,
        specialSkill: WeaponSpecialSkill,
        minRoll: number) {
        super(name, "MassiveWeapon", level, 1, 1, specialSkill, { isFixed: true, value: damage }, minRoll);
    }
}

export const kiss = new MassiveWeaponCard("Kiss", "common", 35, noSpecialSkill, 5);
export const janeli = new MassiveWeaponCard("Janeli", "rare", 40, noSpecialSkill, 5);
export const tochinator = new MassiveWeaponCard("Tochinator", "epic", 45, roll5PlusForInstantReload, 4);
export const jalugar = new MassiveWeaponCard("Jalugar", "legendary", 50, lifeLeach, 3);



