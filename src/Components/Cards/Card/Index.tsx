import "./Card.scss";
import Images from '../Images/Images';
import Dice from '../Common/Dice';
import Range from '../Common/Range';
import Damage from '../Common/Damage';
import SuccessCriteria from '../SuccessCriteria';
import { CardSlotBase } from '../../../gorgasali/Characters/CardSlot';

export default function Card({ cardSlot,  highlight = false }: CardProps) {
    const highlightedClass = highlight? " highlight": "";
    if (!cardSlot.card) {
        return <div className={"weapon-card" }>
            <div className="placeholder-text">
                {cardSlot.name}
            </div>
        </div>
    }
    return <div className={"weapon-card " + cardSlot.card.level  + highlightedClass}>
        <div className="type">{cardSlot.card.type}</div>
        <div className="name">{cardSlot.card.name}</div>
        <div className="weaponImage">
            <Images name={cardSlot.card.name} type={cardSlot.card.type} />
        </div>
        {cardSlot.card.damage ? <Damage damage={cardSlot.card.damage} /> : ""}
        {cardSlot.card.diceCount ? <Dice count={cardSlot.card.diceCount} /> : ""}
        {cardSlot.card.range ? <Range range={cardSlot.card.range} /> : ""}

        <div className="specialSkill">{cardSlot.card.specialSkill.text}</div>
        {cardSlot.card.criteria ? <SuccessCriteria criteria={cardSlot.card.criteria} /> : ""}
    </div>
}

interface CardProps {
    cardSlot: CardSlotBase,
    needsReload: boolean,
    highlight?: boolean
}