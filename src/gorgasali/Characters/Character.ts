import { BodyArmor, Helmet } from "../Cards/Support/Armor/Armor";
import { Consumable } from "../Cards/Support/Consumable/Consumable";
import { Defensive } from "../Cards/Support/Defensive/Defensive";
import Throwable from "../Cards/Support/Throwable/Throwable";
import CharacterAbility from "./Abilities/CharacterAbility";
import WeaponSlot from "./WeaponSlot";

export class CharacterBase {
    public weaponSlot1: WeaponSlot | undefined;
    public weaponSlot2: WeaponSlot | undefined;

    public defensiveConsumable: Defensive | undefined;

    public consumable1: Consumable | undefined;
    public consumable2: Consumable | undefined;
    public consumableBagSlot1: Consumable | undefined;
    public consumableBagSlot2: Consumable | undefined;

    public throwable: Throwable | undefined;
    public throwableBagSlot: Throwable | undefined;

    public helmet: Helmet | undefined;
    public bodyArmor: BodyArmor | undefined;

    public health: number;

    public boxCount: number;
    constructor(
        public name: string,
        public ability: CharacterAbility) {
        this.health = 100;
        this.boxCount = 1;
    }
}

export default abstract class Character<T extends CharacterAbility> extends CharacterBase {
    constructor(
        name: string,
        public ability: T) {
        super(name, ability)
    }
}


