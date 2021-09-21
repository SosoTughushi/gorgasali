import TurnStateMachine from "../../gorgasali/Turn/TurnStates/turnStateMachine";
import { LootedCardSelected, LootingInProgress, LootState } from "../../gorgasali/Turn/Looting";
import { Button, Modal } from "react-bootstrap";
import LootContent from "./LootContent";
import ChangesTurnState from "../Turn/ChangesTurnState";
import { useState } from "react";

export default function LootIndex({ state, onTurnStateChange }: LootIndexProps) {


    if (state instanceof LootingInProgress) {
        return renderModal(state);
    }

    if (state instanceof LootedCardSelected) {
        return renderModal(state);
    }


    return <>
    </>

    function renderModal(state: LootState) {
        return <Modal show={true} size="xl"  centered >
            <Modal.Body>
                <LootContent onTurnStateChange={onTurnStateChange} state={state} />
            </Modal.Body>
        </Modal>
    }
}

interface LootIndexProps extends ChangesTurnState {
    state: TurnStateMachine
}