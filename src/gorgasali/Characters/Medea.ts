import Heal from "./Abilities/Active/Heal";
import Character from "./Character";

export default class Medea extends Character {
    constructor() {
        super("MEDEA", new Heal());
    }
}
