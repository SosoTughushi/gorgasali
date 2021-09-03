import { CharacterBase } from "../../gorgasali/Characters/Character";
import "./Character.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import CardComponent from "../Cards/Card/Index";
import Range from '../Cards/Common/Range';
import { Card as PlayCard } from "../../gorgasali/Cards/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import Badge from "react-bootstrap/Badge";



function renderCardSlot(card: PlayCard | undefined, isRotated: boolean, needsReload: boolean | undefined, placeholder: string) {
    return <CardComponent card={card} placeholder={placeholder} isRotated={isRotated} needsReload={needsReload ?? false} />
}

export default function CharacterComponent({ character }: CharacterProps) {
    console.log(character);
    return <div className="character">
        <div className="row">
            <div className="col-md-10" >
                <ProgressBar>
                    <ProgressBar variant="success" now={character.health} key={1} />
                    <ProgressBar variant="danger" now={100 - character.health} key={3} />
                </ProgressBar>

                {renderCardSlot(character.weaponSlot1?.weaponCard, false, character.weaponSlot1?.needsReload, "Weapon")}
                {renderCardSlot(character.weaponSlot2?.weaponCard, false, character.weaponSlot1?.needsReload, "Weapon")}


                {renderCardSlot(character.defensiveConsumable, false, false, "Defensive")}
                {renderCardSlot(character.consumable1, false, false, "Consumable")}
                {renderCardSlot(character.consumable2, false, false, "Consumable")}
                {renderCardSlot(character.throwable, false, false, "Throwable")}
                {renderCardSlot(character.helmet, false, false, "Helmet")}
                {renderCardSlot(character.bodyArmor, false, false, "Body Armor")}

                {renderCardSlot(character.consumableBagSlot1, true, false, "Consumable")}
                {renderCardSlot(character.consumableBagSlot2, true, false, "Consumable")}

                {renderCardSlot(character.throwableBagSlot, true, false, "Throwable")}
            </div>
            <div className="col-md-2" >
                <h2>{character.name}</h2>
                <Card >
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Special Ability</Card.Subtitle>
                        <Card.Title>{character.ability.name}</Card.Title>
                        <Card.Text>
                            {character.ability.text}
                            {character.ability.range ? <Range range={character.ability.range} /> : ""}
                            {character.ability.cooldown ? (
                                <ProgressBar variant="success" now={(character.ability.charge + 1) / character.ability.cooldown * 100} />
                            ) : ""}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <h1><Badge bg="secondary"><FontAwesomeIcon icon={faBox} /> {character.boxCount}</Badge></h1>

            </div>
        </div>
    </div>
}

interface CharacterProps {
    character: CharacterBase
}