import Ignite from "./Abilities/Passive/Ignite";
import Character from "./Character";

export default class Tharsis extends Character<Ignite> {
    constructor() {
        super("THARSIS", new Ignite());
    }
}
