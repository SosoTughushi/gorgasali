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
import { Defensive } from "../../gorgasali/Cards/Support/Defensive/Defensive";
import Throwable from "../../gorgasali/Cards/Support/Throwable/Throwable";
import AmmoBag from "../../gorgasali/Cards/Support/Consumable/AmmoBag";




export default function CharacterComponent({ character, cardHandlers }: CharacterProps) {

    function renderCardSlot(slot: CardSlotBase, needsReload: boolean | undefined, isAmmoBag: boolean | undefined = undefined) {

        const handler = (() => {
            if (!slot.card) return undefined;
            if (!cardHandlers) return undefined;
            if (isAmmoBag) return undefined;
            if (cardHandlers.defensiveCard && slot.card.type === "Defensive") {
                return () => {
                    if (cardHandlers.defensiveCard) {
                        cardHandlers.defensiveCard(slot.card as Defensive);
                    }
                }
            }
            if (cardHandlers.healingPotion && slot.card instanceof Potion) {
                return () => {
                    if (cardHandlers.healingPotion) {
                        cardHandlers.healingPotion(slot.card as Potion)
                    }
                }
            }
            if (cardHandlers.loadedWeapons && slot.card instanceof WeaponCard) {
                return () => {
                    if (cardHandlers.loadedWeapons) {
                        cardHandlers.loadedWeapons(slot.card as WeaponCard)
                    }
                }
            }
            if (cardHandlers.movementCard && slot.card instanceof MovementConsumable) {
                return () => {
                    if (cardHandlers.movementCard) {
                        cardHandlers.movementCard(slot.card as MovementConsumable)
                    }
                }
            }
            if (cardHandlers.throwableCard && slot.card.type === "Throwable") {
                return () => {
                    if (cardHandlers.throwableCard) {
                        cardHandlers.throwableCard(slot.card as Throwable)
                    }
                }
            }
            if (cardHandlers.weaponExtensionCard && slot.card instanceof GunSocket) {
                return () => {
                    if (cardHandlers.weaponExtensionCard) {
                        cardHandlers.weaponExtensionCard(slot.card as GunSocket)
                    }
                }
            }
            if (cardHandlers.ammoBag && slot.card.name === "Ammo bag") {
                return () => {
                    if (cardHandlers.ammoBag) {
                        cardHandlers.ammoBag(slot.card as AmmoBag)
                    }
                }
            }
            return undefined;
        })();

        const highlight = handler != undefined;

        if (handler) {
            return <div onClick={() => handler()}> <CardComponent cardSlot={slot} needsReload={needsReload ?? false} highlight={highlight} /></div>
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
    cardHandlers?: CardHandlers
}

export interface CardHandlers {
    healingPotion?(card: Potion): void,
    movementCard?(card: MovementConsumable): void,
    defensiveCard?(card: Defensive): void,
    throwableCard?(card: Throwable): void,
    weaponExtensionCard?(card: GunSocket): void,
    loadedWeapons?(card: WeaponCard): void,
    ammoBag?(card: AmmoBag): void,
}