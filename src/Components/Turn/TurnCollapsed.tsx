import { TurnProps } from "./TurnProps";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ({ turn }: TurnProps) {
    return <div className="turn-collapsed" >
        <h2>{turn.state.state} </h2>
        <ProgressBar now={turn.state.order / 9 * 100} />
    </div>
}