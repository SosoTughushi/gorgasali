import Heal from "./Abilities/Active/Heal";
import Character from "./Character";

export default class Medea extends Character<Heal> {
    constructor() {
        super("MEDEA", new Heal());
    }
}
