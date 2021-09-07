import { CharacterBase } from "./Characters/Character";
import { MovementConsumable, Teleport } from "./Cards/Support/Consumable/MovementConsumables"
import { Defensive } from "./Cards/Support/Defensive/Defensive";
import GunSocket, { ExtraSix } from "./Cards/Support/Consumable/GunSocket";
import Throwable from "./Cards/Support/Throwable/Throwable";
import Potion from "./Cards/Support/Consumable/Potion";
import Barrier from "./Cards/Support/Defensive/Barrier";


type MovementDiceResult = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;



///// states

class Initial {
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

class HealingCardUsed {
    rollDice(action: RollDice) {
        return new MovementDiceRolled();
    }
}
class AmmoBagUsed {
    rollDice(action: RollDice) {
        return new MovementDiceRolled();
    }
}
class MovementDiceRolled {

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

class MovementCardUsed {
    move(action: Move) {
        return new Moved();
    }
}

class Moved {
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

class DefensiveCardUsed {
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
class ThrowableCardUsed {
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
class WeaponExtensionCardUsed {
    shootEnemy(action: ShootEnemy) {
        return new TurnEnded();
    }
}
class TurnEnded { }

////// Actions

type UseHealingCard = {
    card: Potion,
}
type UseAmmoBag = {
}
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

// transitions



new Initial()
    .useHealingCard({ card: new Potion("Small") })
    .rollDice({ result: 11 })
    .useMovementCard({ card: new Teleport() })
    .move({})
    .manageBackpack({})


new Initial()
    .rollDice({ result: 11 })
    .skipMovement()
    .reloadWeapons({})


new Initial()
    .rollDice({ result: 8 })
    .move({})
    .useDefensiveCard({ card: new Barrier() })
    .shootEnemy({})

new Initial()
    .rollDice({ result: 8 })
    .move({})
    .useThrowableCard({ card: new Barrier() })
    .shootEnemy({})

new Initial()
    .rollDice({ result: 8 })
    .useMovementCard({ card: new Teleport() })
    .move({})
    .useWeaponExtensionCard({ card: new ExtraSix() })
    .shootEnemy({})






