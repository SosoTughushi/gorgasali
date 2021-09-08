import React from 'react';
import CharacterClass from '../../gorgasali/Characters/Character';
import Character, { CardHandlers } from "../Character";
import TurnStateMachine, { Initial, HealingCardUsed, AmmoBagUsed, MovementDiceRolled, MovementCardUsed, Moved, DefensiveCardUsed, ThrowableCardUsed, WeaponExtensionCardUsed, TurnEnded } from '../../gorgasali/turnStateMachine';
import Card from '../Cards/Card/Index';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Turn({ turn, character, onStateChange }: TurnProps) {
    let handlers: CardHandlers = {};

    const actions: JSX.Element[] = [];
    const addAction = (name: string, nextState: () => TurnStateMachine) => {
        const button = <Button onClick={() => {
            const newState = nextState();
            onStateChange(newState);
        }}>{name}</Button>;
        actions.push(button);
    }
    if (turn.state === "Initial") {
        handlers = {
            healingPotion: card => onStateChange(turn.useHealingCard({ card: card })),
            ammoBag: card => onStateChange(turn.useAmmoBag({}))
        };
        addAction("Roll Dice", () => turn.rollDice({ result: 8 }));
    }
    if (turn.state === "HealingCardUsed") {
        addAction("Roll Dice", () => turn.rollDice({ result: 8 }));
    }

    if (turn.state === "AmmoBagUsed") {
        addAction("Roll Dice", () => turn.rollDice({ result: 8 }));
    }
    if (turn.state === "MovementDiceRolled") {
        handlers = { movementCard: card => onStateChange(turn.useMovementCard({ card: card })) };
        addAction("Move", () => turn.move({}));
        addAction("Skip", () => turn.skipMovement());
    }

    if (turn.state === "MovementCardUsed") {
        addAction("Move", () => turn.move({}));
    }

    if (turn.state === "Moved") {
        handlers = {
            defensiveCard: card => onStateChange(turn.useDefensiveCard({ card: card })),
            throwableCard: card => onStateChange(turn.useThrowableCard({ card: card })),
            weaponExtensionCard: card => onStateChange(turn.useWeaponExtensionCard({ card: card })),
            loadedWeapons: card => onStateChange(turn.shootEnemy({ card: card }))
        }
        addAction("Reload", () => turn.reloadWeapons({}));
        addAction("Manage Backpack", () => turn.manageBackpack({}));
    }
    if (turn.state === "DefensiveCardUsed") {
        handlers = {
            loadedWeapons: card => onStateChange(turn.shootEnemy({ card: card }))
        }

        addAction("Reload", () => turn.reloadWeapons({}));
        addAction("Manage Backpack", () => turn.manageBackpack({}));
    }
    if (turn.state === "ThrowableCardUsed") {
        handlers = {
            loadedWeapons: card => onStateChange(turn.shootEnemy({ card: card }))
        }

        addAction("Reload", () => turn.reloadWeapons({}));
        addAction("Manage Backpack", () => turn.manageBackpack({}));
    }
    if (turn.state === "WeaponExtensionCardUsed") {
        handlers = {
            loadedWeapons: card => onStateChange(turn.shootEnemy({ card: card }))
        }
    }
    if (turn.state === "TurnEnded") {
    }

    return <div>
        <div className="row">

            <div className="col-md-12" >
                <h2>{turn.state} </h2>
                <ProgressBar now={turn.order / 9 * 100} />
                <br />
            </div>
            <div className="col-md-3">
                {actions}
            </div>
            <div className="col-md-9">
                <Character character={character} cardHandlers={handlers} />
            </div>
        </div>

        <br />
    </div>
}
interface TurnProps {
    turn: TurnStateMachine,
    character: CharacterClass,
    onStateChange(state: TurnStateMachine): void;
}