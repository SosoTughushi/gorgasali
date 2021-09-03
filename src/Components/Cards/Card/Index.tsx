import React from 'react';
import WeaponCardClass from "../../../gorgasali/Cards/Weapons/WeaponCard"
import "./Card.scss";
import Images from '../Images/Images';
import Dice from '../Common/Dice';
import Range from '../Common/Range';
import Damage from '../Common/Damage';
import SuccessCriteria from '../SuccessCriteria';
import { Card as CardClass } from '../../../gorgasali/Cards/Card';

export default function Card({ card, isRotated = false, needsReload = false, placeholder }: CardProps) {
    const rotatedClass = isRotated ? " rotated" : "";
    if (!card ) {
        return <div className={"weapon-card" + rotatedClass}>
            <div className="placeholder-text">
                {placeholder}
            </div>
        </div>
    }
    return <div className={"weapon-card " + card.level + rotatedClass}>
        <div className="type">{card.type}</div>
        <div className="name">{card.name}</div>
        <div className="weaponImage">
            <Images name={card.name} type={card.type} />
        </div>
        {card.damage ? <Damage damage={card.damage} /> : ""}
        {card.diceCount ? <Dice count={card.diceCount} /> : ""}
        {card.range ? <Range range={card.range} /> : ""}

        <div className="specialSkill">{card.specialSkill.text}</div>
        {card.criteria ? <SuccessCriteria criteria={card.criteria} /> : ""}
    </div>
}

interface CardProps {
    card: CardClass | undefined,
    placeholder: string,
    isRotated: boolean,
    needsReload: boolean
}