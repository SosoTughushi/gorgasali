import TurnContext from "../../gorgasali/Turn/TurnContext";
import DiceResult from "../Cards/Common/DiceResult";

export default function MovementInfo({ context }: MovementInfoProps) {
    if (!context.movementDice) {
        return <></>;
    }

    return <>
        <h1>
            <DiceResult result={context.movementDice.dice1} /> <DiceResult result={context.movementDice.dice2} />
        </h1>
        <h2>Movement Points: {context.movementDiceTotal}</h2>
    </>
}

interface MovementInfoProps {
    context: TurnContext
}