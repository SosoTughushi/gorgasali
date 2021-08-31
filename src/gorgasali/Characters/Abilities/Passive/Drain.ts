import PassiveCharacterAbility from "./PassiveCharacterAbility";

export default class Drain extends PassiveCharacterAbility {
    constructor() {
        super("D'RAIN", "Drains liquid from enemy wounds and uses it to restore health.");
        // todo: each dice 4+ deals 5 damage 
    }
}
