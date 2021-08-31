import ActiveCharacterAbility from "./ActiveCharacterAbility";

export default class Steal extends ActiveCharacterAbility {
    constructor() {
        super("STEAL", 3, 3, "With his dexterousness Varas steals useful equipment with from his enemies");
    }
}
