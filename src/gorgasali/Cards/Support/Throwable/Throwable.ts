import TurnStateBase from "../../../Turn/TurnStates/TurnStateBase";
import { ScoutRangeMinRoll } from "../../Weapons/ScoutWeaponCard";
import WeaponDamage from "../../Weapons/WeaponDamage";
import SupportCard from "../SupportCard";


export default abstract class Throwable extends SupportCard {
    constructor(
        name: string, 
        specialSkill: string, 
        diceCount: number| undefined,
        range: number | undefined, 
        damage: WeaponDamage | undefined,
        criteria: number | ScoutRangeMinRoll[]| undefined) {
        super(name, "common", "Throwable", specialSkill, diceCount, range, damage, criteria);
    }
}
