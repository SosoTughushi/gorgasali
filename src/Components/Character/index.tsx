import { CharacterBase } from "../../gorgasali/Characters/Character";
import "./Character.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import CardComponent from "../Cards/Card/Index";
import Range from '../Cards/Common/Range';
import { Card as PlayCard } from "../../gorgasali/Cards/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import Badge from "react-bootstrap/Badge";
import CharacterSymbol from "./CharacterSybol";



function renderCardSlot(card: PlayCard | undefined, isRotated: boolean, needsReload: boolean | undefined, placeholder: string) {
    return <CardComponent card={card} placeholder={placeholder} isRotated={isRotated} needsReload={needsReload ?? false} />
}

export default function CharacterComponent({ character }: CharacterProps) {
    console.log(character);
    return <div className={"character " + convertToCssClass(character.name)}>
        <div className="row">
            <div className="col-md-10" >
                <ProgressBar>
                    <ProgressBar variant="success" now={character.health} key={1} />
                    <ProgressBar variant="danger" now={100 - character.health} key={3} />
                </ProgressBar>

                <table>
                    <tr>
                        <td>
                            {renderCardSlot(character.weaponSlot2?.weaponCard, false, character.weaponSlot1?.needsReload, "Weapon")}
                            {renderCardSlot(character.weaponSlot1?.weaponCard, false, character.weaponSlot1?.needsReload, "Weapon")}
                        </td>
                        <td>
                            {renderCardSlot(character.defensiveConsumable, false, false, "Defensive")}
                        </td>
                        <td>
                            {renderCardSlot(character.consumable1, false, false, "Consumable")}
                            {renderCardSlot(character.consumable2, false, false, "Consumable")}
                        </td>
                        <td>{renderCardSlot(character.throwable, false, false, "Throwable")}</td>
                        <td>{renderCardSlot(character.helmet, false, false, "Helmet")}
                            {renderCardSlot(character.bodyArmor, false, false, "Body Armor")}</td>
                    </tr>
                </table>



                <div className="row">
                    <div className="col-md-3 rotated">
                        {renderCardSlot(character.consumableBagSlot1, false, false, "Consumable")}
                        {renderCardSlot(character.consumableBagSlot2, false, false, "Consumable")}
                        {renderCardSlot(character.throwableBagSlot, false, false, "Throwable")}
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
                            <ProgressBar variant="success" now={(character.ability.charge + 1) / character.ability.cooldown * 100} />
                        ) : ""}</div>
                </div>
                <br />
                <h1><Badge bg="secondary"><FontAwesomeIcon icon={faBox} /> {character.boxCount}</Badge></h1>

            </div>
        </div>
    </div>
}

function convertToCssClass(name: string) {
    return name.toLowerCase().replace("'", "").split(' ').join('-');
}

interface CharacterProps {
    character: CharacterBase
}