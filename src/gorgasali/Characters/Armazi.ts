import Supernova from "./Abilities/Active/Supernova";
import Character from "./Character";

export default class Armazi extends Character<Supernova> {
    constructor() {
        super("ARMAZI", new Supernova());
    }
}
