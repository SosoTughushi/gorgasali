import Board from "../board";
import TurnContext from "./TurnContext";
import TurnStateMachine from "./TurnStates/turnStateMachine";

type Turn = {
    state: TurnStateMachine,
    context: TurnContext,
    board: Board
}

export default Turn