import { TurnProps } from "./TurnProps";
import TurnActions from "./TurnActions";
import MovementInfo from "./MovementInfo";

export default function ({ turn, onTurnStateChange }: TurnProps) {
    return <div className="turn-collapsed" >
        <TurnActions state={turn.state} onTurnStateChange={onTurnStateChange} />
        <MovementInfo context={turn.context} />
    </div>
}
