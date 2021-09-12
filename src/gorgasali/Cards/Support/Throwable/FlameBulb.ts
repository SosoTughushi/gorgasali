import CharacterBase from "../../../Characters/Character";
import TurnContext from "../../../Turn/TurnContext";
import Moved from "../../../Turn/TurnStates/Moved";
import ThrowableCardUsed from "../../../Turn/TurnStates/ThrowableCardUsed";
import TurnStateBase from "../../../Turn/TurnStates/TurnStateBase";
import { rollSingleDice } from "../../../Turn/TurnStates/turnStateMachine";
import WeaponDamage from "../../Weapons/WeaponDamage";
import Throwable from "./Throwable";

export default class FlameBulb extends Throwable {
    constructor() {
        super("Flame bulb", "Explosive area damage", 2, 2, { isFixed: true, value: 40 }, 9);
    }

    use(context: TurnContext): FlameBulbInProgress {
        return new FlameBulbInProgress(context);
    }
}

export type FlameBulbState = FlameBulbInProgress | FlameBulbTargetChosen | FlameBulbTargetHit

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

        if (roll1 + roll2 >= 9) {
            if (this.context.target) {
                this.context.target.damage(40);
            }
            return new FlameBulbTargetHit(this.context).ok();
        }

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

