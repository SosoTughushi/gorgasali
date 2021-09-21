import { CardCategory } from "../../Cards/Card";
import Tile from "../../Tile";
import TurnContext from "../TurnContext";
import { Action } from "./Action";
import TurnStateMachine from "./turnStateMachine";



export default abstract class TurnStateBase {
    public state: string = "TurnStateBase";
    public order: number = 0;

    constructor(public context: TurnContext, public availableMoves?: Set<number>) {
    }

    selectTile(tile: Tile): TurnStateMachine {
        return this;
    }

    getAvailableActions(): Action[] {
        return [];
    }

    getAvailabeCards() : CardCategory[] {
        return [];
    }
}


