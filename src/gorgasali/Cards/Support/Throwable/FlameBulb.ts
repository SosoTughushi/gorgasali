import CharacterBase from "../../../Characters/Character";
import TurnContext from "../../../Turn/TurnContext";
import ThrowableCardUsed from "../../../Turn/TurnStates/ThrowableCardUsed";
import TurnStateBase from "../../../Turn/TurnStates/TurnStateBase";
import { rollSingleDice } from "../../../Turn/TurnStates/turnStateMachine";
import Throwable from "./Throwable";
import { isAnyoneInRange } from "../../../Board/destinations/getShootingRange";

export default class FlameBulb extends Throwable {
    constructor() {
        super("Flame bulb", "Explosive area damage", 2, 2, { isFixed: true, value: 40 }, 9);
    }
    
    canUse(context: TurnContext): boolean {
        if(isAnyoneInRange.bind(context.board)(2, 2)) {
            return true;
        }
        return false;
    }

    use(context: TurnContext): FlameBulbInProgress | ThrowableCardUsed {
        if (!isAnyoneInRange.bind(context.board)(2, 2)) {
            return new ThrowableCardUsed(context);
        }
        return new FlameBulbInProgress(context);
    }
}

export type FlameBulbState = FlameBulbInProgress | FlameBulbTargetChosen | FlameBulbTargetHit | FlameBulbMissed

class FlameBulbInProgress extends TurnStateBase {
    public order = 5.5;
    public state: "FlameBulbInProgress" = "FlameBulbInProgress";
    public range = 2;

    public chooseTarget(character: CharacterBase) {
        this.context.target = character;
        return new FlameBulbTargetChosen(this.context).roll();
    }
}

class FlameBulbTargetChosen extends TurnStateBase {
    public order = 5.6;
    public state: "FlameBulbTargetChosen" = "FlameBulbTargetChosen";

    public roll() {
        const roll1 = rollSingleDice();
        const roll2 = rollSingleDice();

        const usedCard = this.context.usedCards.filter(c=>c.usedCard.type === "Throwable")[0];
        usedCard.diceResults = [roll1, roll2];

        if (roll1 + roll2 >= 9) {
            if (this.context.target) {
                this.context.target.damage(40);
            }
            usedCard.successfull = true;
            return new FlameBulbTargetHit(this.context).ok();
        }

        usedCard.successfull = false;
        return new FlameBulbMissed(this.context).ok();
    }
}

class FlameBulbTargetHit extends TurnStateBase {
    public order = 5.7;
    public state: "FlameBulbTargetHit" = "FlameBulbTargetHit";

    public ok() {
        return new ThrowableCardUsed(this.context);
    }
}

class FlameBulbMissed extends TurnStateBase {
    public order = 5.7;
    public state: "FlameBulbMissed" = "FlameBulbMissed";

    public ok() {
        return new ThrowableCardUsed(this.context);
    }
}

