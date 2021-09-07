import Character from "../../gorgasali/Characters/Character";
import "./Character.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import CardComponent from "../Cards/Card/Index";
import Range from '../Cards/Common/Range';
import { Card as PlayCard } from "../../gorgasali/Cards/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import Badge from "react-bootstrap/Badge";
import CharacterSymbol from "./CharacterSybol";
import { CardSlotBase } from "../../gorgasali/Characters/CardSlot";
import Potion from "../../gorgasali/Cards/Support/Consumable/Potion";
import WeaponCard from "../../gorgasali/Cards/Weapons/WeaponCard";
import { MovementConsumable } from "../../gorgasali/Cards/Support/Consumable/MovementConsumables";
import GunSocket from "../../gorgasali/Cards/Support/Consumable/GunSocket";




export default function CharacterComponent({ character, highlights = undefined }: CharacterProps) {

    function renderCardSlot(card: CardSlotBase, needsReload: boolean | undefined, isAmmoBag: boolean | undefined = undefined) {

        const highlight = (() => {
            if (!card.card) return false;
            if (!highlights) return false;
            if (isAmmoBag) return false;
            if (highlights.defensiveCard && card.card.type === "Defensive") return true;
            if (highlights.healingPotion && card.card instanceof Potion) return true;
            if (highlights.loadedWeapons && card.card instanceof WeaponCard) return true;
            if (highlights.movementCard && card.card instanceof MovementConsumable) return true;
            if (highlights.throwableCard && card.card.type === "Throwable") return true;
            if (highlights.weaponExtensionCard && card.card instanceof GunSocket) return true;
            return false;
        })();

        return <CardComponent cardSlot={card} needsReload={needsReload ?? false} highlight={highlight} />
    }

    return <div className={"character " + convertToCssClass(character.name)}>
        <div className="row">
            <div className="col-md-10" >
                <ProgressBar >
                    <ProgressBar variant="success" now={character.health} key={1} animated label={character.health} />
                    <ProgressBar variant="danger" now={100 - character.health} key={3} />
                </ProgressBar>

                <table>
                    <tr>
                        <td>
                            {renderCardSlot(character.weaponSlot2, character.weaponSlot1?.needsReload)}
                            {renderCardSlot(character.weaponSlot1, character.weaponSlot1?.needsReload)}
                        </td>
                        <td>
                            {renderCardSlot(character.defensiveConsumable, false)}
                        </td>
                        <td>
                            {renderCardSlot(character.consumable1, false)}
                            {renderCardSlot(character.consumable2, false)}
                        </td>
                        <td>{renderCardSlot(character.throwable, false)}</td>
                        <td>{renderCardSlot(character.helmet, false)}
                            {renderCardSlot(character.bodyArmor, false)}</td>
                    </tr>
                </table>



                <div className="row">
                    <div className="col-md-3 rotated">
                        {renderCardSlot(character.consumableBagSlot1, false, true)}
                        {renderCardSlot(character.consumableBagSlot2, false, true)}
                        {renderCardSlot(character.throwableBagSlot, false, true)}
                    </div>
                </div>
            </div>
            <div className="col-md-2" >
                <h2>{character.name} <CharacterSymbol name={character.name} /></h2>

                <div className="special-ability">
                    <div className="subtitle">Special Ability</div>
                    <div className="title">{character.ability.name}</div>
                    <div className="text">{character.ability.text}
                        {character.ability.range ? <Range range={character.ability.range} /> : ""}
                        {character.ability.cooldown ? (
                            <ProgressBar now={(character.ability.charge) / character.ability.cooldown * 100} animated label={character.ability.charge + "/" + character.ability.cooldown} />
                        ) : ""}</div>
                </div>
                <br />
                <h1><Badge bg="secondary"><FontAwesomeIcon icon={faBox} /> {character.boxCount}</Badge></h1>

            </div>
        </div>
    </div>
}

export function convertToCssClass(name: string) {
    return name.toLowerCase().replace("'", "").split(' ').join('-');
}

interface CharacterProps {
    character: Character,
    highlights?: Highlights
}

export interface Highlights {
    healingPotion?: boolean,
    movementCard?: boolean,
    defensiveCard?: boolean,
    throwableCard?: boolean,
    weaponExtensionCard?: boolean,
    loadedWeapons?: boolean,
}