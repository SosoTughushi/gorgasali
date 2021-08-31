import ActiveCharacterAbility from "./ActiveCharacterAbility";

export default class Hypnosis extends ActiveCharacterAbility {
    constructor() {
        super("HYPNOSIS", 4, 5, "Ebue calls upon the ancient spirits and hypnotizes his enemy.");
    }
}
