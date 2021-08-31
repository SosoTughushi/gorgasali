import ActiveCharacterAbility from "./ActiveCharacterAbility";

export default class Heal extends ActiveCharacterAbility {
    constructor() {
        super("STEAL", 3, 0, "With her extraordinary talent, Medea has an ability to cure herself");
    }
}
