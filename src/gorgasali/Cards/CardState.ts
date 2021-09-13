import { TeleportInProgress } from "./Support/Consumable/MovementConsumables/Teleport";
import { FlameBulbState } from "./Support/Throwable/FlameBulb";
import { WeaponCardState } from "./Weapons/WeaponCard";

export type CardState = FlameBulbState | TeleportInProgress | WeaponCardState;
