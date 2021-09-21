import { Card } from "../Cards/Card";
import WeaponCard from "../Cards/Weapons/WeaponCard";


export class CardSlotBase {
    public card: Card | undefined;
    constructor(
        public name: CardSlotType,
        public isBag: boolean
    ) {
    }
}

type CardSlotType = "Weapon" | "Defensive" | "Throwable" | "Consumable" | "Helmet" | "Body Armor";

export default class CardSlot <T extends Card> extends CardSlotBase {
    
    public card: T | undefined;

    constructor(
        name: CardSlotType,
        isBag: boolean
    ) {
        super(name, isBag);
    }
}

export class WeaponSlot extends CardSlot<WeaponCard> {
    public needsReload: boolean;
    constructor(isBag: boolean) {
        super("Weapon", isBag);
        this.needsReload = false;
    }
}