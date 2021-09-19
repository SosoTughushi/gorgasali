import TurnStateMachine from "../../gorgasali/Turn/TurnStates/turnStateMachine";
import { Button } from 'react-bootstrap';
import ChangesTurnState from "./ChangesTurnState";

export default function TurnActions({ state, onTurnStateChange }: TurnActionsProps) {
    const actions: JSX.Element[] = [];

    const turnActions = state.getAvailableActions();
    for (let i = 0; i < turnActions.length; i++) {
        const action = turnActions[i];
        const button = <Button onClick={() => {
            const newState = action.action();
            onTurnStateChange(newState);
        }}>{action.type}</Button>;
        actions.push(button);
    }

    return <div className="turn-actions">
        {actions}
    </div>
}

interface TurnActionsProps extends ChangesTurnState {
    state: TurnStateMachine
}