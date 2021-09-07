import { Card } from "../Cards/Card";
import WeaponCard from "../Cards/Weapons/WeaponCard";


export class CardSlotBase {
    public card: Card | undefined;
    constructor(
        public name: string
    ) {
    }
}

export default class CardSlot <T extends Card> extends CardSlotBase {
    
    public card: T | undefined;

    constructor(
        name: string
    ) {
        super(name);
    }
}

export class WeaponSlot extends CardSlot<WeaponCard> {
    public needsReload: boolean;

    constructor() {
        super("Weapon");
        this.needsReload = false;
    }
}