
import EyeContact from "./Abilities/Active/EyeContact";
import Immunity from "./Abilities/Passive/Immunity";
import Character from "./Character";

export default class Kruber extends Character<EyeContact> {
    constructor() {
        super("KRUBER", new EyeContact());
    }
}
