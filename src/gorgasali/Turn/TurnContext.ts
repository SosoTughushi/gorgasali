import Board from "../board";
import CharacterBase from "../Characters/Character";
import { EagleEye, ExtraSix, SecondChance, StrikeOption } from "../Cards/Support/Consumable/GunSocket";
import Compass from "../Cards/Support/Consumable/MovementConsumables/Compass";
import Adrenaline from "../Cards/Support/Consumable/MovementConsumables/Adrenaline";
import Teleport from "../Cards/Support/Consumable/MovementConsumables/Teleport";
import { ObstacleType } from "../Cards/Support/Consumable/MovementConsumables/ObstacleNulifier";
import { Card } from "../Cards/Card";

 type TurnContext = {
    self: CharacterBase;
    target?: CharacterBase;
    movementDice?: MovementDice;
    movementDiceTotal?: number;
    previousLocations: Set<number>;
    board: Board;
    gunSockets?: GunSockets;
    obstaclePenaltyNulified?: ObstacleType;
    movementAmplifiers?: MovementAmplifiers;

    usedCards: Card[]
};


export default TurnContext;


type GunSockets = {
    secondChanceActive?: SecondChance,
    extraSixActive?: ExtraSix,
    strikeOptionActive?: StrikeOption,
    eagleEyeActive?: EagleEye
}

type MovementAmplifiers = {
    teleport?: Teleport,
    compass?: Compass,
    adrenaline?: Adrenaline
}


export type Dice = 1 | 2 | 3 | 4 | 5 | 6;
export type MovementDice = { dice1: Dice, dice2: Dice };