import { Card } from "../../gorgasali/Cards/Card";
import CardSlot, { CardSlotBase } from "../../gorgasali/Characters/CardSlot";
import { Dice } from "../../gorgasali/Turn/TurnContext";
import CardComponent from '../Cards/Card/Index';

export default function UsedCard({ card, diceResults, successfull }: UsedCardProps) {
    const slot = new CardSlot("Whatever");
    slot.card = card;

    const diceSum = diceResults?.map(c => c as number).reduce((a, b) => a + b, 0)
    return <div className="used-card">
        <div className="row">
        <div className="col-md-8">
            <CardComponent cardSlot={slot} needsReload={false} />
        </div>
        <div className="col-md-4">
            {diceResults && diceResults.map((c, i) => <div>dice {i + 1}: <h3>{c}</h3></div>)}
            {diceSum && <div>total <h2>{diceSum}</h2></div>}
            {successfull && <h1>Successfull</h1>}
            {successfull === false && <h1>Fail</h1>}
        </div>
        </div>
    </div>
}

interface UsedCardProps {
    card: Card;
    diceResults?: Dice[];
    successfull?: boolean
}