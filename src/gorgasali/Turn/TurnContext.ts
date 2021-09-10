import Board from "../board";
import CharacterBase from "../Characters/Character";
import { EagleEyeSpecialSkill, ExtraSixSpecialSkill, SecondChanceSpecialSkill, StrikeOptionSpecialSkill } from "../Cards/Support/Consumable/GunSocket";
import { AdrenalineSpecialSkill, CompassSpecialSkill, TeleportSpecialSkill } from "../Cards/Support/Consumable/MovementConsumables";
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
    secondChanceActive?: SecondChanceSpecialSkill,
    extraSixActive?: ExtraSixSpecialSkill,
    strikeOptionActive?: StrikeOptionSpecialSkill,
    eagleEyeActive?: EagleEyeSpecialSkill
}

type MovementAmplifiers = {
    teleport?: TeleportSpecialSkill,
    adrenaline?: AdrenalineSpecialSkill,
    compass?: CompassSpecialSkill
}
