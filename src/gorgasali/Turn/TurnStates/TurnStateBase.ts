import Tile from "../../Tile";
import TurnContext from "../TurnContext";
import TurnStateMachine from "./turnStateMachine";



export default abstract class TurnStateBase {
    public state: string = "TurnStateBase";
    public order: number = 0;

    constructor(protected context: TurnContext, public availableMoves?: Set<number>) {
    }

    selectTile(tile: Tile): TurnStateMachine {
        return this;
    }

    getAvailableActions(): AvailableActions[] {
        return [];
    }
}

type AvailableActions = {
    name: string;
    action() : TurnStateBase
}
