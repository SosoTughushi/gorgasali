import WeaponCard from "../Cards/Weapons/WeaponCard";

export default class WeaponSlot {
    public needsReload: boolean;

    constructor(public weaponCard: WeaponCard) {
        this.needsReload = false;
    }
}
