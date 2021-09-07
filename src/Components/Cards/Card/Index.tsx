import React from 'react';
import WeaponCardClass from "../../../gorgasali/Cards/Weapons/WeaponCard"
import "./Card.scss";
import Images from '../Images/Images';
import Dice from '../Common/Dice';
import Range from '../Common/Range';
import Damage from '../Common/Damage';
import SuccessCriteria from '../SuccessCriteria';
import { CardSlotBase } from '../../../gorgasali/Characters/CardSlot';

export default function Card({ cardSlot, isRotated = false, needsReload = false }: CardProps) {
    const rotatedClass = isRotated ? " rotated" : "";
    if (!cardSlot.card) {
        return <div className={"weapon-card" + rotatedClass}>
            <div className="placeholder-text">
                {cardSlot.name}
            </div>
        </div>
    }
    return <div className={"weapon-card " + cardSlot.card.level + rotatedClass}>
        <div className="type">{cardSlot.card.type}</div>
        <div className="name">{cardSlot.name}</div>
        <div className="weaponImage">
            <Images name={cardSlot.name} type={cardSlot.card.type} />
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
    isRotated: boolean,
    needsReload: boolean
}