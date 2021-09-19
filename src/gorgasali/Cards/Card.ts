import { CardLevel } from "./CardLevel";
import TurnContext from "../Turn/TurnContext";
import { ScoutRangeMinRoll } from "./Weapons/ScoutWeaponCard";
import WeaponDamage from "./Weapons/WeaponDamage";
import { WeaponType } from "./Weapons/WeaponType";

import TurnStateMachine from "../Turn/TurnStates/turnStateMachine";
import { WeaponCardState } from "./Weapons/WeaponCard";
import TurnStateBase from "../Turn/TurnStates/TurnStateBase";

export abstract class Card {
    constructor(
        public name: string,
        public level: CardLevel,
        public type: CardType,
        public category: CardCategory,
        public specialSkillText: string,
        public diceCount: number | undefined,
        public range: number | undefined,
        public damage: WeaponDamage | undefined,
        public criteria: number | ScoutRangeMinRoll[] | undefined
    ) {

    }

    abstract use(context: TurnContext): void | TurnStateMachine;

    canUse(context: TurnContext): boolean {
        return true;
    }
}

type SupportCard = "Throwable" | "Consumable" | "Defensive" | "Armor";

type CardType = WeaponType | SupportCard;

export type CardCategory = "HealingPotion" | "Movement" | "Defensive" | "Throwable" | "WeaponExtension" | "Weapon" | "AmmoBag" | "Armor";


