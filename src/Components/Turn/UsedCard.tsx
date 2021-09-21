import { Card } from "../../gorgasali/Cards/Card";
import CardSlot, { CardSlotBase } from "../../gorgasali/Characters/CardSlot";
import { Dice } from "../../gorgasali/Turn/TurnContext";
import CardComponent from '../Cards/Card/Index';
import DiceResult from "../Cards/Common/DiceResult";

export default function UsedCard({ card, diceResults, successfull }: UsedCardProps) {
    const slot = new CardSlot("Weapon", false);
    slot.card = card;

    const diceSum = diceResults?.map(c => c as number).reduce((a, b) => a + b, 0)
    return <div className="used-card">
        <div className="row">
            <div className="col-md-6">
                <CardComponent cardSlot={slot} needsReload={false} />
            </div>
            <div className="col-md-2">
                {diceResults && <>
                    {successfull && <h2>Success</h2>}
                    {successfull === false && <h2>Fail</h2>}
                    <h1>{diceResults && diceResults.map((c, i) => <DiceResult result={c} />)}</h1>
                    total:  {<h2>{diceSum}</h2>}
                </>}

            </div>
        </div>
    </div>
}

interface UsedCardProps {
    card: Card;
    diceResults?: Dice[];
    successfull?: boolean
}