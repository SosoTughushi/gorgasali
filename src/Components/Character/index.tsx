import Character from "../../gorgasali/Characters/Character";
import "./Character.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import CardComponent from "../Cards/Card/Index";
import Range from '../Cards/Common/Range';
import { Card, Card as PlayCard } from "../../gorgasali/Cards/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import Badge from "react-bootstrap/Badge";
import CharacterSymbol from "./CharacterSybol";
import CardSlot, { CardSlotBase, WeaponSlot } from "../../gorgasali/Characters/CardSlot";
import Potion from "../../gorgasali/Cards/Support/Consumable/Potion";
import WeaponCard from "../../gorgasali/Cards/Weapons/WeaponCard";
import { MovementConsumable } from "../../gorgasali/Cards/Support/Consumable/MovementConsumables";
import GunSocket from "../../gorgasali/Cards/Support/Consumable/GunSocket";
import { Defensive } from "../../gorgasali/Cards/Support/Defensive/Defensive";
import Throwable from "../../gorgasali/Cards/Support/Throwable/Throwable";
import AmmoBag from "../../gorgasali/Cards/Support/Consumable/AmmoBag";
import Board from "../../gorgasali/board";
import TurnContext from "../../gorgasali/Turn/TurnContext";




export default function CharacterComponent({ character, cardHandlers, turnContext }: CharacterProps) {

    function renderCardSlot(slot: CardSlotBase, needsReload: boolean | undefined, isAmmoBag: boolean | undefined = undefined) {


        const createHandler = (() => {
            if (!turnContext) return undefined;
            const context = turnContext;
            if (!slot.card) return undefined;
            if (!cardHandlers) return undefined;
            if (isAmmoBag) return undefined;
            if (needsReload) return undefined;


            function onCardClick<T extends Card>(card: T,  cardCallback: (card: T) => void){
                return () => {
                    cardCallback(card);
                    turnContext?.usedCards.push(card);
                    card.use(context);
                    if (slot instanceof WeaponSlot) {
                        slot.needsReload = true;
                    } else {
                        slot.card = undefined;
                    }
                }
            }

            if (cardHandlers.defensiveCard && slot.card.type === "Defensive") {
                return onCardClick(slot.card as Defensive, cardHandlers.defensiveCard);
            }
            if (cardHandlers.healingPotion && slot.card instanceof Potion) {
                return onCardClick(slot.card, cardHandlers.healingPotion);
            }
            if (cardHandlers.loadedWeapons && slot.card instanceof WeaponCard) {
                return onCardClick(slot.card, cardHandlers.loadedWeapons);
            }
            if (cardHandlers.movementCard && slot.card instanceof MovementConsumable) {
                return onCardClick(slot.card, cardHandlers.movementCard);
            }
            if (cardHandlers.throwableCard && slot.card.type === "Throwable") {
                return onCardClick(slot.card, cardHandlers.throwableCard);
            }
            if (cardHandlers.weaponExtensionCard && slot.card instanceof GunSocket) {
                return onCardClick(slot.card, cardHandlers.weaponExtensionCard);
            }
            if (cardHandlers.ammoBag && slot.card.name === "Ammo bag") {
                return onCardClick(slot.card, cardHandlers.ammoBag);
            }
            return undefined;
        });

        const handler = createHandler();

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
    return name.toLowerCase().replace("'", "").split(' ').join('-');
}

interface CharacterProps {
    character: Character,
    cardHandlers?: CardHandlers,
    turnContext?: TurnContext
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