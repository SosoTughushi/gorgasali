import { Card } from "../../gorgasali/Cards/Card";
import { BodyArmor, Helmet } from "../../gorgasali/Cards/Support/Armor/Armor";
import { Consumable } from "../../gorgasali/Cards/Support/Consumable/Consumable";
import { Defensive } from "../../gorgasali/Cards/Support/Defensive/Defensive";
import Throwable from "../../gorgasali/Cards/Support/Throwable/Throwable";
import WeaponCard from "../../gorgasali/Cards/Weapons/WeaponCard";
import { CardSlotBase } from "../../gorgasali/Characters/CardSlot";
import { LootedCardSelected, LootingInProgress, LootState } from "../../gorgasali/Turn/Looting";
import CardComponent from "../Cards/Card/Index";
import CharacterComponent from "../Character";
import ChangesTurnState from "../Turn/ChangesTurnState";
import "./Loot.scss";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faWindowClose } from '@fortawesome/free-solid-svg-icons';

export default function LootContent({ state, onTurnStateChange }: LootProps) {

    let isCardSelected = false;
    let isCardChosen = false;

    let clickableCondition = (slot: CardSlotBase) => {
        return false;
    }

    type onClickType = ((slot: CardSlotBase) => void) | undefined;

    let onDestinationSelected: onClickType = undefined;

    let onCardSelected: onClickType = undefined;
    if (state instanceof LootedCardSelected) {
        isCardSelected = true;
        isCardChosen = true;

        clickableCondition = (slot) => {
            switch (slot.name) {
                case "Weapon":
                    if (state.card instanceof WeaponCard) {
                        return true;
                    }
                    break;

                case "Consumable":
                    if (state.card instanceof Consumable) {
                        return true;
                    }
                    break;
                case "Defensive":
                    if (state.card instanceof Defensive) {
                        return true;
                    }
                    break;
                case "Helmet":
                    if (state.card instanceof Helmet) {
                        return true;
                    }
                    break;
                case "Weapon":
                    if (state.card instanceof WeaponCard) {
                        return true;
                    }
                    break;
                case "Body Armor":
                    if (state.card instanceof BodyArmor) {
                        return true;
                    }
                    break;
                case "Throwable":
                    if (state.card instanceof Throwable) {
                        return true;
                    }
                    break;

            }

            return false;
        }

        onDestinationSelected = (slot: CardSlotBase) => {
            onTurnStateChange(state.equip(slot));
        }
    }

    if (state instanceof LootingInProgress) {
        onCardSelected = (slot) => {
            if (slot.card) {
                onTurnStateChange(state.select(slot.card));
            }
        }
    }

    function renderCard(card: Card | undefined) {
        if (!card) return <></>

        let highlighted = true;
        if (state instanceof LootedCardSelected) {
            highlighted = card === state.card;

            return <div>
                <CardComponent cardSlot={createSlot(card)} needsReload={false} highlight={highlighted} onCardSlotClick={onCardSelected} />
                {highlighted && <div>
                    <Button variant="danger" onClick={() => onTurnStateChange(state.discard())}><FontAwesomeIcon icon={faTrash} /></Button>
                    <Button variant="primary" onClick={() => onTurnStateChange(state.cancel())}><FontAwesomeIcon icon={faWindowClose} /></Button>
                    </div>}

            </div>

        }
        return <CardComponent cardSlot={createSlot(card)} needsReload={false} highlight={highlighted} onCardSlotClick={onCardSelected} />
    }

    return <div className="loot">
        <div className="row">
            <div className="col-md-4">
                <div className="loot-box">
                    {renderCard(state.box.weapon)}
                    {renderCard(state.box.support1)}
                    {renderCard(state.box.support2)}
                </div>
            </div>
            <div className="col-md-8">
                <div className="loot-destination">
                    <CharacterComponent character={state.context.self} clickableCondition={clickableCondition} onCardSlotClick={onDestinationSelected} />
                </div>
            </div>
        </div>
    </div>
}

interface LootProps extends ChangesTurnState {
    state: LootState
}


function createSlot(card: Card) {
    const slot = new CardSlotBase("Weapon", false);
    slot.card = card;
    return slot;
}