import "./SidePanel.scss";
import { IconDefinition, faArrowLeft, faArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidePanel({ expanded, children, collapsedContent, orientation, transparent, toggleButtonHandler }: SidePanelProps) {

    const getToggleButtonIcon = () => {
        switch (orientation) {
            case "bottom":
                return expanded ? faArrowDown : faArrowUp;
            case "top":
                return expanded ? faArrowUp : faArrowDown;
            case "left":
                return expanded ? faArrowLeft : faArrowRight;
            case "right":
                return expanded ? faArrowRight : faArrowLeft;
        }
    }

    let renderToggleButton = () => {
        if (toggleButtonHandler) {
            return <div className="side-panel-toggle-button" onClick={() => toggleButtonHandler(!expanded)}>
                <FontAwesomeIcon icon={getToggleButtonIcon()} />
            </div>
        }
    }

    return <div className={"side-panel " + "side-panel-" + orientation}>

        <div className={transparent ? "side-panel-content-transparent" : "side-panel-content"} >

            <div className={"side-panel-collapsed"}>
                {renderToggleButton()}
                {collapsedContent}
            </div>
            {expanded && <div className="side-panel-expanded">{children}</div>}
        </div>
    </div>

}

interface SidePanelProps {
    expanded: boolean;
    children?: React.ReactNode;
    orientation: "left" | "right" | "top" | "bottom"
    collapsedContent: React.ReactNode;
    transparent?: boolean;
    toggleButtonHandler?(toggle: boolean): void;
}