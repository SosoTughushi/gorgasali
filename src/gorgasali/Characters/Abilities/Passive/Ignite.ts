import PassiveCharacterAbility from "./PassiveCharacterAbility";

export default class Ignite extends PassiveCharacterAbility {
    constructor() {
        super("IGNITE", "Burns enemies standing next to him.");
        // todo: burns 10 points
    }
}
