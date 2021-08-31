import Steal from "./Abilities/Active/Steal";
import Character from "./Character";

export default class Varas extends Character<Steal> {
    constructor() {
        super("VARAS", new Steal());
    }
}
