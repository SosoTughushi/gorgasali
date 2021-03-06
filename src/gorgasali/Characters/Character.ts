import { BodyArmor, Helmet } from "../Cards/Support/Armor/Armor";
import { Consumable } from "../Cards/Support/Consumable/Consumable";
import { Defensive } from "../Cards/Support/Defensive/Defensive";
import Throwable from "../Cards/Support/Throwable/Throwable";
import CharacterAbility from "./Abilities/CharacterAbility";
import CardSlot, { WeaponSlot } from "./CardSlot";

export default class CharacterBase {
    public weaponSlot1: WeaponSlot;
    public weaponSlot2: WeaponSlot;

    public defensiveConsumable: CardSlot<Defensive>;

    public consumable1: CardSlot<Consumable>;
    public consumable2: CardSlot<Consumable>;
    public consumableBagSlot1: CardSlot<Consumable>;
    public consumableBagSlot2: CardSlot<Consumable>;

    public throwable: CardSlot<Throwable>;
    public throwableBagSlot: CardSlot<Throwable>;

    public helmet: CardSlot<Helmet>;
    public bodyArmor: CardSlot<BodyArmor>;

    public _health: number;
    public get health(): number { return this._health }
    public heal(amount: number) {
        this._health += amount;
        if (this._health > 100) {
            this._health = 100;
        }
    }

    public damage(amount: number) {
        this._health -= amount;
        if (this._health < 0) {
            this._health = 0;
        }
    }

    public boxCount: number;
    constructor(
        public name: CharacterName,
        public ability: CharacterAbility) {
        this._health = 100;
        this.boxCount = 1;

        this.weaponSlot1 = new WeaponSlot(false);
        this.weaponSlot2 = new WeaponSlot(false);

        this.consumable1 = new CardSlot<Consumable>("Consumable", false);
        this.consumable2 = new CardSlot<Consumable>("Consumable", false);
        this.consumableBagSlot1 = new CardSlot<Consumable>("Consumable", true);
        this.consumableBagSlot2 = new CardSlot<Consumable>("Consumable", true);

        this.throwable = new CardSlot<Throwable>("Throwable", false);
        this.throwableBagSlot = new CardSlot<Throwable>("Throwable", true);

        this.helmet = new CardSlot<Helmet>("Helmet", false);
        this.bodyArmor = new CardSlot<BodyArmor>("Body Armor", false);
        this.defensiveConsumable = new CardSlot<Defensive>("Defensive", false);
        this.position = -1;
    }

    public position: number;
}

export type CharacterName = "ARMAZI" | "D'RAIN" | "EBUE" | "E'MOON" | "MEDEA" | "OCTOR" | "PRINCESS TSIVA" | "THARSIS" | "VARAS" | "KRUBER";



