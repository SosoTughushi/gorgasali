import { CardLevel } from "./CardLevel";
import TurnContext from "../Turn/TurnContext";
import { ScoutRangeMinRoll } from "./Weapons/ScoutWeaponCard";
import WeaponDamage from "./Weapons/WeaponDamage";
import { WeaponType } from "./Weapons/WeaponType";

export abstract class Card {
    constructor(
        public name: string,
        public level: CardLevel,
        public type: CardType,
        public specialSkillText: string,
        public diceCount: number | undefined,
        public range: number | undefined,
        public damage: WeaponDamage | undefined,
        public criteria: number | ScoutRangeMinRoll[] | undefined
    ) {

    }

    abstract use(context: TurnContext): void;
}

type SupportCard = "Throwable" | "Consumable" | "Defensive" | "Armor";

type CardType = WeaponType | SupportCard;
