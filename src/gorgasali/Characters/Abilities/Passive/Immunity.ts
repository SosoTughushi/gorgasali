import PassiveCharacterAbility from "./PassiveCharacterAbility";

export default class Immunity extends PassiveCharacterAbility {
    constructor() {
        super("IMMUNITY", "Immune to all the special abilities");
    }
}
