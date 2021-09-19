import "./Turn.scss";
import TurnCollapsed from "./TurnCollapsed";
import TurnExpanded from "./TurnExpanded";
import { TurnProps } from "./TurnProps";
import SidePanel from "../SidePanel";
import { useState } from 'react';


export default function TurnIndex({ onTurnStateChange, turn }: TurnIndexProps) {
    let [expanded, setExpanded] = useState(false);
    return <SidePanel
        expanded={expanded}
        orientation="bottom"
        toggleButtonHandler={toggle => setExpanded(toggle)}
        collapsedContent={<TurnCollapsed onTurnStateChange={onTurnStateChange} turn={turn} />}>
        <TurnExpanded onTurnStateChange={onTurnStateChange} turn={turn} />
    </SidePanel>
}

interface TurnIndexProps extends TurnProps {
}