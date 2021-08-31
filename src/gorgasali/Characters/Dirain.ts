import Drain from "./Abilities/Passive/Drain";
import Character from "./Character";

export default class Dirain extends Character<Drain> {
    constructor() {
        super("D'RAIN", new Drain());
    }
}
