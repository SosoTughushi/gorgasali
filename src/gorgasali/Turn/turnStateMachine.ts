import Character from "../Characters/Character";
import { MovementConsumable, Teleport } from "../Cards/Support/Consumable/MovementConsumables"
import { Defensive } from "../Cards/Support/Defensive/Defensive";
import GunSocket, { ExtraSix } from "../Cards/Support/Consumable/GunSocket";
import Throwable from "../Cards/Support/Throwable/Throwable";
import Potion from "../Cards/Support/Consumable/Potion";
import Barrier from "../Cards/Support/Defensive/Barrier";


type TurnStateMachine = 
    Initial 
    | HealingCardUsed 
    | AmmoBagUsed 
    | MovementDiceRolled 
    | MovementCardUsed 
    | Moved 
    | DefensiveCardUsed 
    | ThrowableCardUsed 
    | WeaponExtensionCardUsed
    | TurnEnded

export default TurnStateMachine

///// states

export class Initial {
    public state: "Initial" = "Initial";
    public order = 0;
    useHealingCard(action: UseHealingCard): HealingCardUsed {
        return new HealingCardUsed();
    }

    useAmmoBag(action: UseAmmoBag): AmmoBagUsed {
        return new AmmoBagUsed();
    }

    rollDice(action: RollDice): MovementDiceRolled {
        return new MovementDiceRolled()
    }
}

export class HealingCardUsed {
    public state: "HealingCardUsed" = "HealingCardUsed";
    public order = 1;

    rollDice(action: RollDice) {
        return new MovementDiceRolled();
    }
}
export class AmmoBagUsed {
    
    public state: "AmmoBagUsed" = "AmmoBagUsed";
    public order = 2;
    rollDice(action: RollDice) {
        return new MovementDiceRolled();
    }
}
export class MovementDiceRolled {

    public state: "MovementDiceRolled" = "MovementDiceRolled";
    public order = 3;
    skipMovement(): Moved {
        return new Moved();
    }

    useMovementCard(action: UseMovementCard) {
        return new MovementCardUsed();
    }
    move(action: Move): Moved {
        return new Moved();
    }
}

export class MovementCardUsed {
    public state: "MovementCardUsed" = "MovementCardUsed";
    public order = 4;

    move(action: Move) {
        return new Moved();
    }
}

export class Moved {
    public state: "Moved" = "Moved";
    public order = 5;

    useDefensiveCard(action: UseDefensiveCard) {
        return new DefensiveCardUsed();
    }
    useThrowableCard(action: UseThrowableCard) {
        return new ThrowableCardUsed();
    }

    useWeaponExtensionCard(action: UseWeaponExtensionCard) {
        return new WeaponExtensionCardUsed();
    }

    reloadWeapons(action: RealoadWeapons) {
        return new TurnEnded();
    }

    manageBackpack(action: ManageBackpack) {
        return new TurnEnded();
    }

    shootEnemy(action: ShootEnemy) {
        return new TurnEnded();
    }
}

export class DefensiveCardUsed {
    public state: "DefensiveCardUsed" = "DefensiveCardUsed";
    public order = 6;

    reloadWeapons(action: RealoadWeapons) {
        return new TurnEnded();
    }


    manageBackpack(action: ManageBackpack) {
        return new TurnEnded();
    }


    shootEnemy(action: ShootEnemy) {
        return new TurnEnded();
    }
}
export class ThrowableCardUsed {
    public state: "ThrowableCardUsed" = "ThrowableCardUsed";
    public order = 7;

    reloadWeapons(action: RealoadWeapons) {
        return new TurnEnded();
    }


    manageBackpack(action: ManageBackpack) {
        return new TurnEnded();
    }


    shootEnemy(action: ShootEnemy) {
        return new TurnEnded();
    }
}
export class WeaponExtensionCardUsed {
    public state: "WeaponExtensionCardUsed" = "WeaponExtensionCardUsed";
    public order = 8;

    shootEnemy(action: ShootEnemy) {
        return new TurnEnded();
    }
}
export class TurnEnded { 
    public state: "TurnEnded" = "TurnEnded";
    public order = 9;
}

////// Actions

type UseHealingCard = {
    card: Potion,
}
type UseAmmoBag = {
}


type MovementDiceResult = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type RollDice = {
    result: MovementDiceResult,
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






