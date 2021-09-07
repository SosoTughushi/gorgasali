import CharacterAbilityType from "./CharacterAbilityType";


export default abstract class CharacterAbility {
    public charge: number;
    constructor(
        public name: string,
        public type: CharacterAbilityType,
        public text: string,
        public range: number | undefined = undefined,
        public cooldown: number | undefined = undefined) {
            this.charge = 1;
    }
}
