import Steal from "./Abilities/Active/Steal";
import Character from "./Character";

export default class Varas extends Character {
    constructor() {
        super("VARAS", new Steal());
    }
}
