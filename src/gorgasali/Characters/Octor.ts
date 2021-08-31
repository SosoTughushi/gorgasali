import Imitate from "./Abilities/Active/Imitate";
import Character from "./Character";

export default class Octor extends Character<Imitate> {
    constructor() {
        super("OCTOR", new Imitate());
    }
}
