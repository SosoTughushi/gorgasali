import { CardLevel } from "./CardLevel";
import { EagleEyeSpecialSkill, ExtraSixSpecialSkill, SecondChanceSpecialSkill, StrikeOptionSpecialSkill } from "./Support/Consumable/GunSocket";
import TurnContext from "../Turn/TurnContext";
import { ScoutRangeMinRoll } from "./Weapons/ScoutWeaponCard";
import WeaponDamage from "./Weapons/WeaponDamage";
import { WeaponType } from "./Weapons/WeaponType";

export abstract class Card {
    constructor(
        public name: string,
        public level: CardLevel,
        public type: CardType,
        public specialSkill: CardSpecialSkill,
        public diceCount: number | undefined,
        public range: number | undefined,
        public damage: WeaponDamage | undefined,
        public criteria: number | ScoutRangeMinRoll[] | undefined
    ) {

    }
}

type SupportCard = "Throwable" | "Consumable" | "Defensive" | "Armor";

type CardType = WeaponType | SupportCard;

export abstract class CardSpecialSkill {
    constructor(public text: string) {
    }

    abstract use(context: TurnContext): void;
}
