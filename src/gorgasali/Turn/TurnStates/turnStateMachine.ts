import MovementConsumable from "../../Cards/Support/Consumable/MovementConsumables/MovementConsumable"
import { Defensive } from "../../Cards/Support/Defensive/Defensive";
import GunSocket, { ExtraSix } from "../../Cards/Support/Consumable/GunSocket";
import Throwable from "../../Cards/Support/Throwable/Throwable";
import Potion from "../../Cards/Support/Consumable/Potion";
import { Dice } from "../TurnContext";
import TurnEnded from "./TurnEnded";
import MovementDiceRolled from "./MovementDiceRolled";
import Initial from "./Initial";
import HealingCardUsed from "./HealingCardUsed";
import AmmoBagUsed from "./AmmoBagUsed";
import MoveInProgress from "./MoveInProgress";
import Moved from "./Moved";
import DefensiveCardUsed from "./DefensiveCardUsed";
import ThrowableCardUsed from "./ThrowableCardUsed";
import WeaponExtensionCardUsed from "./WeaponExtensionCardUsed";
import MovementCardUsed from "./MovementCardUsed";
import { CardState } from "../../Cards/CardState";


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
    | CardState

export default TurnStateMachine

///// states



export function rollSingleDice(): Dice {
    // @ts-ignore: ts cant figure out that result will be from 1 to 6
    return Math.floor(Math.random() * 6) + 1;
}


////// Actions

export type UseHealingCard = {
    card: Potion,
}
export type UseAmmoBag = {
}
export type UseMovementCard = {
    card: MovementConsumable
}

export type UseDefensiveCard = {
    card: Defensive
}
export type UseThrowableCard = {
    card: Throwable
}
export type UseWeaponExtensionCard = {
    card: GunSocket
}
export type RealoadWeapons = {
}
export type ManageBackpack = {
}






