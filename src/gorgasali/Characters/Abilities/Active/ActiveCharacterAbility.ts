import CharacterAbility from "../CharacterAbility";


export default abstract class ActiveCharacterAbility extends CharacterAbility {
    constructor(
        name: string,
        public cooldown: number,
        public range: number,
        text: string) {
        super(name, "Active", text);
    }
}


