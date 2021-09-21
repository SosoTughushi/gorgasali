import "./Card.scss";
import Images from '../Images/Images';
import Dice from '../Common/Dice';
import Range from '../Common/Range';
import Damage from '../Common/Damage';
import SuccessCriteria from '../SuccessCriteria';
import { CardSlotBase } from '../../../gorgasali/Characters/CardSlot';

export default function Card({ cardSlot, highlight = false, needsReload, onCardSlotClick }: CardProps) {
    const highlightedClass = highlight ? " highlight" : "";
    const reloadClass = needsReload ? " needs-reload" : "";
    const clickableClass = onCardSlotClick ? " clickable " : "";

    function renderOnClick(content: any) {
        if (onCardSlotClick) {
            return <div onClick={() => onCardSlotClick(cardSlot)}>
                {content}
            </div>
        }

        return <>{content}</>;
    }

    if (!cardSlot.card) {
        return renderOnClick(<div className={"weapon-card " + highlightedClass + clickableClass}>
            <div className="placeholder-text">
                {cardSlot.name}
            </div>
        </div>)
    }

    return renderOnClick(<div className={"weapon-card " + cardSlot.card.level + highlightedClass + reloadClass + clickableClass}>
        <div className="type">{cardSlot.card.type}</div>
        <div className="name">{cardSlot.card.name}</div>
        <div className="weaponImage">
            <Images name={cardSlot.card.name} type={cardSlot.card.type} />
        </div>
        {cardSlot.card.damage ? <Damage damage={cardSlot.card.damage} /> : ""}
        {cardSlot.card.diceCount ? <Dice count={cardSlot.card.diceCount} /> : ""}
        {cardSlot.card.range ? <Range range={cardSlot.card.range} /> : ""}

        <div className="specialSkill">{cardSlot.card.specialSkillText}</div>
        {cardSlot.card.criteria ? <SuccessCriteria criteria={cardSlot.card.criteria} /> : ""}
    </div>)
}

interface CardProps {
    cardSlot: CardSlotBase,
    needsReload: boolean,
    highlight?: boolean,
    onCardSlotClick?: (slot: CardSlotBase) => void
}