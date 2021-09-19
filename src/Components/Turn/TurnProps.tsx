import TurnClass from '../../gorgasali/Turn/Turn';
import ChangesTurnState from "./ChangesTurnState";

export interface TurnProps extends ChangesTurnState {
    turn: TurnClass;
}
