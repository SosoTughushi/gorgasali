import React from 'react';
import CharacterClass from '../../gorgasali/Characters/Character';
import Character, { CardHandlers } from "../Character";
import TurnStateMachine, { Initial, HealingCardUsed, AmmoBagUsed, MovementDiceRolled, MovementCardUsed, Moved, DefensiveCardUsed, ThrowableCardUsed, WeaponExtensionCardUsed, TurnEnded } from '../../gorgasali/Turn/turnStateMachine';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Board from '../../gorgasali/board';
import TurnClass from '../../gorgasali/Turn/Turn';
import CardComponent from '../Cards/Card/Index';
import { Card } from '../../gorgasali/Cards/Card';
import CardSlot, { CardSlotBase } from '../../gorgasali/Characters/CardSlot';

export default function Turn({ turn, onStateChange }: TurnProps) {
    const state = turn.state;
    let handlers: CardHandlers = {};

    const actions: JSX.Element[] = [];
    const addAction = (name: string, nextState: () => TurnStateMachine) => {
        const button = <Button onClick={() => {
            const newState = nextState();
            onStateChange(newState);
        }}>{name}</Button>;
        actions.push(button);
    }
    if (state.state === "Initial") {
        handlers = {
            healingPotion: card => onStateChange(state.useHealingCard({ card: card })),
            ammoBag: card => onStateChange(state.useAmmoBag({}))
        };
        addAction("Roll Dice", () => state.rollDice());
    }
    if (state.state === "HealingCardUsed") {
        addAction("Roll Dice", () => state.rollDice());
    }

    if (state.state === "AmmoBagUsed") {
        addAction("Roll Dice", () => state.rollDice());
    }
    if (state.state === "MovementDiceRolled") {
        handlers = { movementCard: card => onStateChange(state.useMovementCard({ card: card })) };
        addAction("Skip", () => state.skipMovement());
    }

    if (state.state === "MovementCardUsed") {
    }

    if (state.state === "Moved") {
        handlers = {
            defensiveCard: card => onStateChange(state.useDefensiveCard({ card: card })),
            throwableCard: card => onStateChange(state.useThrowableCard({ card: card })),
            weaponExtensionCard: card => onStateChange(state.useWeaponExtensionCard({ card: card })),
            loadedWeapons: card => onStateChange(state.shootEnemy({ card: card }))
        }
        addAction("Reload", () => state.reloadWeapons({}));
        addAction("Manage Backpack", () => state.manageBackpack({}));
    }
    if (state.state === "DefensiveCardUsed") {
        handlers = {
            loadedWeapons: card => onStateChange(state.shootEnemy({ card: card }))
        }

        addAction("Reload", () => state.reloadWeapons({}));
        addAction("Manage Backpack", () => state.manageBackpack({}));
    }
    if (state.state === "ThrowableCardUsed") {
        handlers = {
            loadedWeapons: card => onStateChange(state.shootEnemy({ card: card }))
        }

        addAction("Reload", () => state.reloadWeapons({}));
        addAction("Manage Backpack", () => state.manageBackpack({}));
    }
    if (state.state === "WeaponExtensionCardUsed") {
        handlers = {
            loadedWeapons: card => onStateChange(state.shootEnemy({ card: card }))
        }
    }
    if (state.state === "TurnEnded") {
    }

    const toCardComponent = (card: Card) => {
        const slot = new CardSlot("Whatever");
        slot.card = card;
        return <CardComponent cardSlot={slot} needsReload={false} />
    }

    return <div>
        <div className="row">
            <div className="col-md-offset-6 col-md-6 " >
                <h2>{state.state} </h2>
                <ProgressBar now={state.order / 9 * 100} />
                <br />
            </div>
        </div>

        {actions}
        <br />
        {turn.context.movementDice &&
            <div>
                dice1: <h3>{turn.context.movementDice.dice1}</h3>
                dice1: <h3>{turn.context.movementDice.dice2}</h3>
                available move points: <h3>{turn.context.movementDiceTotal}</h3>
            </div>}
        <Character character={turn.board.currentPlayer} cardHandlers={handlers} turnContext={turn.context} />
        <br />
        {turn.context.usedCards.map(toCardComponent)}
    </div>
}
interface TurnProps {
    turn: TurnClass;
    onStateChange(state: TurnStateMachine): void;
}