import { TurnProps } from "./TurnProps";
import ProgressBar from 'react-bootstrap/ProgressBar';
import TurnActions from "./TurnActions";

export default function ({ turn, onTurnStateChange }: TurnProps) {
    return <div className="turn-collapsed" >
        <h2>{turn.state.state} </h2>
        <ProgressBar now={turn.state.order / 9 * 100} />
        <TurnActions state={turn.state} onTurnStateChange={onTurnStateChange} />
    </div>
}
