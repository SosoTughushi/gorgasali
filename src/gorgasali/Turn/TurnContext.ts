import Board from "../board";
import CharacterBase from "../Characters/Character";
import { EagleEye, ExtraSix, SecondChance, StrikeOption } from "../Cards/Support/Consumable/GunSocket";
import { Adrenaline, Compass, Teleport } from "../Cards/Support/Consumable/MovementConsumables";
import { ObstacleType } from "../Cards/Support/Consumable/ObstacleNulifier";
import { Card } from "../Cards/Card";

 type TurnContext = {
    self: CharacterBase;
    target?: CharacterBase;
    diceResult?: number;
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
    adrenaline?: Adrenaline,
    compass?: Compass
}
