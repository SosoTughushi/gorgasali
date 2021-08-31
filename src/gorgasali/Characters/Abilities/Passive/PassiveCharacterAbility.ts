import CharacterAbility from "../CharacterAbility";


export default abstract class PassiveCharacterAbility extends CharacterAbility {
    constructor(name: string, text: string) {
        super(name, "Passive", text);
    }
}


