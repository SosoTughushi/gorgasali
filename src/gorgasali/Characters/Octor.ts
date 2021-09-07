import Imitate from "./Abilities/Active/Imitate";
import Character from "./Character";

export default class Octor extends Character {
    constructor() {
        super("OCTOR", new Imitate());
    }
}
