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



function renderCardSlot(card: CardSlotBase, isRotated: boolean, needsReload: boolean | undefined) {
    return <CardComponent cardSlot={card} isRotated={isRotated} needsReload={needsReload ?? false} />
}

export default function CharacterComponent({ character }: CharacterProps) {
    console.log(character);
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
                            {renderCardSlot(character.weaponSlot2, false, character.weaponSlot1?.needsReload)}
                            {renderCardSlot(character.weaponSlot1, false, character.weaponSlot1?.needsReload)}
                        </td>
                        <td>
                            {renderCardSlot(character.defensiveConsumable, false, false)}
                        </td>
                        <td>
                            {renderCardSlot(character.consumable1, false, false)}
                            {renderCardSlot(character.consumable2, false, false)}
                        </td>
                        <td>{renderCardSlot(character.throwable, false, false)}</td>
                        <td>{renderCardSlot(character.helmet, false, false)}
                            {renderCardSlot(character.bodyArmor, false, false)}</td>
                    </tr>
                </table>



                <div className="row">
                    <div className="col-md-3 rotated">
                        {renderCardSlot(character.consumableBagSlot1, false, false)}
                        {renderCardSlot(character.consumableBagSlot2, false, false)}
                        {renderCardSlot(character.throwableBagSlot, false, false)}
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
    character: Character
}