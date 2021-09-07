import Hypnosis from "./Abilities/Active/Hypnosis";
import Character from "./Character";

export default class Ebue extends Character {
    constructor() {
        super("EBUE", new Hypnosis());
    }
}
