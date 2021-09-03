import CharacterAbility from "../CharacterAbility";


export default abstract class ActiveCharacterAbility extends CharacterAbility {
    constructor(
        name: string,
        cooldown: number,
        range: number,
        text: string) {
        super(name, "Active", text, range, cooldown);
    }
}


