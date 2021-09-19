import TurnStateBase from "./TurnStateBase";

export type ActionType = "Roll Dice" | "Skip Movement" | "Reload Weapons" | "Manage backpack";


export type Action = {
    type: ActionType;
    action() : TurnStateBase
}