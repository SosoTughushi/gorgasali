import TurnStateMachine from "../../gorgasali/Turn/TurnStates/turnStateMachine";
import { Button } from 'react-bootstrap';
import ChangesTurnState from "./ChangesTurnState";

export default function TurnActions({ state, onTurnStateChange }: TurnActionsProps) {
    const actions: JSX.Element[] = [];

    const turnActions = state.getAvailableActions();
    for (let i = 0; i < turnActions.length; i++) {
        const action = turnActions[i];
        const button = <Button variant={"danger"} onClick={() => {
            const newState = action.action();
            onTurnStateChange(newState);
        }}>{action.type}</Button>;
        actions.push(button);
    }

    return <div className="turn-actions">
        {actions.map(b=> <span>{b}{' '}</span>)}
    </div>
}

interface TurnActionsProps extends ChangesTurnState {
    state: TurnStateMachine
}