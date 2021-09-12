import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';


export default interface ChangesTurnState {
    onTurnStateChange(state: TurnStateMachine): void;
}
