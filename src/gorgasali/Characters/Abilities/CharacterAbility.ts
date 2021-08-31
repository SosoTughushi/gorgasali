import CharacterAbilityType from "./CharacterAbilityType";


export default abstract class CharacterAbility {
    constructor(
        public name: string,
        public type: CharacterAbilityType,
        public text: string) {
    }
}
