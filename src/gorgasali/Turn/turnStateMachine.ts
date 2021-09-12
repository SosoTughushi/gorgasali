import Character from "../Characters/Character";
import { MovementConsumable, Teleport } from "../Cards/Support/Consumable/MovementConsumables"
import { Defensive } from "../Cards/Support/Defensive/Defensive";
import GunSocket, { ExtraSix } from "../Cards/Support/Consumable/GunSocket";
import Throwable from "../Cards/Support/Throwable/Throwable";
import Potion from "../Cards/Support/Consumable/Potion";
import TurnContext, { Dice } from "./TurnContext";
import Tile, { getTileCost } from "../Tile";


type TurnStateMachine =
    Initial
    | HealingCardUsed
    | AmmoBagUsed
    | MovementDiceRolled
    | MovementCardUsed
    | MoveInProgress
    | Moved
    | DefensiveCardUsed
    | ThrowableCardUsed
    | WeaponExtensionCardUsed
    | TurnEnded

export default TurnStateMachine

///// states

abstract class TurnStateBase {
    constructor(protected context: TurnContext) {
    }
}

export class Initial extends TurnStateBase {
    public state: "Initial" = "Initial";
    public order = 0;
    useHealingCard(action: UseHealingCard): HealingCardUsed {
        return new HealingCardUsed(this.context);
    }

    useAmmoBag(action: UseAmmoBag): AmmoBagUsed {
        return new AmmoBagUsed(this.context);
    }

    rollDice(): MovementDiceRolled {
        this.context.movementDice = {
            dice1: rollSingleDice(),
            dice2: rollSingleDice()
        }
        this.context.movementDiceTotal = this.context.movementDice.dice1 + this.context.movementDice.dice2;
        return new MovementDiceRolled(this.context);
    }
}

export class HealingCardUsed extends TurnStateBase {
    public state: "HealingCardUsed" = "HealingCardUsed";
    public order = 1;

    rollDice() {
        return new MovementDiceRolled(this.context);
    }
}
export class AmmoBagUsed extends TurnStateBase {

    public state: "AmmoBagUsed" = "AmmoBagUsed";
    public order = 2;
    rollDice() {
        return new MovementDiceRolled(this.context);
    }
}

export class MoveInProgress extends TurnStateBase {

    public state: "MoveInProgress" = "MoveInProgress";
    public order = 4.5;
    move(targetTile: Tile): MoveInProgress | Moved {
        let cost = getTileCost(this.context.obstaclePenaltyNulified, targetTile);
        if (this.context.movementDiceTotal) {
            this.context.movementDiceTotal -= cost;
        }
        this.context.previousLocations.add(this.context.board.currentPlayerPosition);
        this.context.board.moveTo(targetTile.index);

        const availableMoves = this.context.board.getAvailableDestinations(this.context);
        if (availableMoves.size === 0) {
            return new Moved(this.context);
        }

        return new MoveInProgress(this.context);
    }

    endMove(action: Move) {
        return new Moved(this.context);
    }
}
export class MovementDiceRolled extends TurnStateBase {

    public state: "MovementDiceRolled" = "MovementDiceRolled";
    public order = 3;
    skipMovement(): Moved {
        return new Moved(this.context);
    }

    useMovementCard(action: UseMovementCard) {
        return new MovementCardUsed(this.context);
    }

    move(targetTile: Tile): MoveInProgress | Moved {
        const inProgress = new MoveInProgress(this.context);
        return inProgress.move(targetTile);
    }
}

export class MovementCardUsed extends TurnStateBase {
    public state: "MovementCardUsed" = "MovementCardUsed";
    public order = 4;

    move(targetTile: Tile): MoveInProgress| Moved {
        const inProgress = new MoveInProgress(this.context);
        return inProgress.move(targetTile);
    }
}

export class Moved extends TurnStateBase {
    public state: "Moved" = "Moved";
    public order = 5;

    useDefensiveCard(action: UseDefensiveCard) {
        return new DefensiveCardUsed(this.context);
    }
    useThrowableCard(action: UseThrowableCard) {
        return new ThrowableCardUsed(this.context);
    }

    useWeaponExtensionCard(action: UseWeaponExtensionCard) {
        return new WeaponExtensionCardUsed(this.context);
    }

    reloadWeapons(action: RealoadWeapons) {
        return new TurnEnded(this.context);
    }

    manageBackpack(action: ManageBackpack) {
        return new TurnEnded(this.context);
    }

    shootEnemy(action: ShootEnemy) {
        return new TurnEnded(this.context);
    }
}

export class DefensiveCardUsed extends TurnStateBase {
    public state: "DefensiveCardUsed" = "DefensiveCardUsed";
    public order = 6;

    reloadWeapons(action: RealoadWeapons) {
        return new TurnEnded(this.context);
    }


    manageBackpack(action: ManageBackpack) {
        return new TurnEnded(this.context);
    }


    shootEnemy(action: ShootEnemy) {
        return new TurnEnded(this.context);
    }
}
export class ThrowableCardUsed extends TurnStateBase {
    public state: "ThrowableCardUsed" = "ThrowableCardUsed";
    public order = 7;

    reloadWeapons(action: RealoadWeapons) {
        return new TurnEnded(this.context);
    }


    manageBackpack(action: ManageBackpack) {
        return new TurnEnded(this.context);
    }


    shootEnemy(action: ShootEnemy) {
        return new TurnEnded(this.context);
    }
}
export class WeaponExtensionCardUsed extends TurnStateBase {
    public state: "WeaponExtensionCardUsed" = "WeaponExtensionCardUsed";
    public order = 8;

    shootEnemy(action: ShootEnemy) {
        return new TurnEnded(this.context);
    }
}
export class TurnEnded extends TurnStateBase {
    public state: "TurnEnded" = "TurnEnded";
    public order = 9;
}

function rollSingleDice(): Dice {
    // @ts-ignore: ts cant figure out that result will be from 1 to 6
    return Math.floor(Math.random() * 6) + 1;
}

////// Actions

type UseHealingCard = {
    card: Potion,
}
type UseAmmoBag = {
}
type UseMovementCard = {
    card: MovementConsumable
}
type Move = {
}

type UseDefensiveCard = {
    card: Defensive
}
type UseThrowableCard = {
    card: Throwable
}
type UseWeaponExtensionCard = {
    card: GunSocket
}
type RealoadWeapons = {
}
type ManageBackpack = {
}
type ShootEnemy = {
}






