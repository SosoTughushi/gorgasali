import WeaponSpecialSkill from "./WeaponSpecialSkill";
import { Card } from "../Card";
import { WeaponType } from "./WeaponType";
import { CardLevel } from "../CardLevel";
import WeaponDamage from "./WeaponDamage";
import { ScoutRangeMinRoll } from "./ScoutWeaponCard";
import TurnContext, { Dice } from "../../Turn/TurnContext";
import { isAnyoneInRange } from "../../Board/destinations/getShootingRange";
import TurnStateBase from "../../Turn/TurnStates/TurnStateBase";
import CharacterBase from "../../Characters/Character";
import TurnEnded from "../../Turn/TurnStates/TurnEnded";
import { rollSingleDice } from "../../Turn/TurnStates/turnStateMachine";
import { convertToCoordinates } from "../../Board/convertToCoordinates";


export default abstract class WeaponCard extends Card {

    constructor(
        public name: string,
        public type: WeaponType,
        public level: CardLevel,
        public weaponDiceCount: number,
        public weaponRange: number,
        public specialSkill: WeaponSpecialSkill,
        public weaponDamage: WeaponDamage,
        criteria: number | ScoutRangeMinRoll[] | undefined) {
        super(name, level, type, specialSkill.text, weaponDiceCount, weaponRange, weaponDamage, criteria);
    }

    canUse(context: TurnContext): boolean {

        if (isAnyoneInRange.bind(context.board)(this.weaponRange)) {
            return true;
        }
        return false;
    }


    use(context: TurnContext): WeaponCardInProgress | TurnEnded {
        if (this.canUse(context)) {
            return new WeaponCardInProgress(context, this);
        }
        return new TurnEnded(context);
    }
}

export type WeaponCardState = WeaponCardInProgress | WeaponCardTargetChosen | WeaponCardTargetHit | WeaponCardTargetMissed;

class WeaponCardInProgress extends TurnStateBase {
    public state: "WeaponCardInProgress" = "WeaponCardInProgress";
    public order = 6.5;

    constructor(context: TurnContext, public card: WeaponCard) {
        super(context);
    }

    public chooseTarget(character: CharacterBase) {
        this.context.target = character;
        return new WeaponCardTargetChosen(this.context, this.card).roll();
    }
}

class WeaponCardTargetChosen extends TurnStateBase {

    public state: "WeaponCardTargetChosen" = "WeaponCardTargetChosen";
    public order = 6.6;


    constructor(context: TurnContext, private card: WeaponCard) {
        super(context);
    }

    public roll() {

        const usedCard = this.context.usedCards.filter(c => c.usedCard instanceof WeaponCard)[0];
        usedCard.diceResults = [];
        for (let i = 0; i < this.card.weaponDiceCount; i++) {
            usedCard.diceResults.push(rollSingleDice());
        }

        const totalDiceResult = usedCard.diceResults.map(d => d as number).reduce((a, b) => a + b);

        let isSuccessfull = false;
        if (typeof this.card.criteria === "number") {
            isSuccessfull = totalDiceResult >= this.card.criteria;
        } else if(this.card.criteria === undefined){
            isSuccessfull = true;
        } else {
            const target = convertToCoordinates(this.context.target?.position??0);
            const source = convertToCoordinates(this.context.self.position);
            const range = Math.max(Math.abs(target.x - source.x), Math.abs(target.y-source.y));
            const rangeCriteria = this.card.criteria.filter(cr=>cr.range === range)[0];
            if(totalDiceResult >= rangeCriteria.minRoll) {
                isSuccessfull = true;
            }
        }
        usedCard.successfull = isSuccessfull;

        if(isSuccessfull) {
            // todo: account for card special skills
            const damage = this.card.weaponDamage.isFixed ? this.card.weaponDamage.value : this.card.weaponDamage?.value * totalDiceResult;
            this.context.target?.damage(damage);
            return new WeaponCardTargetHit(this.context).ok();
        }

        return new WeaponCardTargetMissed(this.context).ok();
    }
}

class WeaponCardTargetHit extends TurnStateBase {

    public order = 6.7;
    public state: "WeaponCardTargetHit" = "WeaponCardTargetHit";

    public ok() {
        return new TurnEnded(this.context);
    }
}

class WeaponCardTargetMissed extends TurnStateBase {
    public order = 6.7;
    public state: "WeaponCardTargetMissed" = "WeaponCardTargetMissed";
    
    public ok() {
        return new TurnEnded(this.context);
    }
}






