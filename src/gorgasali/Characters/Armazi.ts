import Supernova from "./Abilities/Active/Supernova";
import Character from "./Character";

export default class Armazi extends Character {
    constructor() {
        super("ARMAZI", new Supernova());
    }
}
