import Immunity from "./Abilities/Passive/Immunity";
import Character from "./Character";

export default class Emoon extends Character<Immunity> {
    constructor() {
        super("E'MOON", new Immunity());
    }
}
