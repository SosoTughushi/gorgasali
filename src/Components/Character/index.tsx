import Character from "../../gorgasali/Characters/Character";
import "./Character.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import CardComponent from "../Cards/Card/Index";
import Range from '../Cards/Common/Range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import Badge from "react-bootstrap/Badge";
import CharacterSymbol from "./CharacterSybol";
import { CardSlotBase, WeaponSlot } from "../../gorgasali/Characters/CardSlot";




export default function CharacterComponent({ character, onCardSlotClick, clickableCondition }: CharacterProps) {

    function renderCardSlot(slot: CardSlotBase, needsReload: boolean | undefined, isBag: boolean | undefined = undefined) {

        const createHandler = (() => {

            if (!clickableCondition) {
                return undefined
            }
            if (!onCardSlotClick) {
                return undefined;
            }
            if (!clickableCondition(slot)) {
                return undefined;
            }

            return () => {
                onCardSlotClick(slot)
            };
        });

        const handler = createHandler();

        const highlight = handler != undefined;

        if (handler) {
            return <CardComponent cardSlot={slot} needsReload={needsReload ?? false} highlight={highlight} onCardSlotClick={(_) => handler()} />
        }

        return <CardComponent cardSlot={slot} needsReload={needsReload ?? false} highlight={highlight} />;
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
                            {renderCardSlot(character.weaponSlot1, character.weaponSlot1.needsReload)}
                            {renderCardSlot(character.weaponSlot2, character.weaponSlot2.needsReload)}
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
    return name.toLowerCase().replace("'", "").split(' ').join('-') + " ";
}

interface CharacterProps {
    character: Character,
    clickableCondition?: (slot: CardSlotBase) => boolean,
    onCardSlotClick?: (slot: CardSlotBase) => void
}

