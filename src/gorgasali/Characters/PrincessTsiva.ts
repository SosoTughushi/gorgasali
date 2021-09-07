import FreezingVortex from "./Abilities/Active/FreezingVortex";
import Character from "./Character";

export default class PrincessTsiva extends Character {
    constructor() {
        super("PRINCESS TSIVA", new FreezingVortex());
    }
}
