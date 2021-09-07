import React from 'react';
import CharacterClass from '../../gorgasali/Characters/Character';
import Character, { Highlights } from "../Character";
import TurnStateMachine, { Initial, HealingCardUsed, AmmoBagUsed, MovementDiceRolled, MovementCardUsed, Moved, DefensiveCardUsed, ThrowableCardUsed, WeaponExtensionCardUsed, TurnEnded } from '../../gorgasali/turnStateMachine';
import Card from '../Cards/Card/Index';
import { Button } from 'react-bootstrap';

export default function Turn({ turn, character }: TurnProps) {
    let highlights: Highlights = {};
    let rollDice = false;
    let useAmmoBag = false;
    let move = false;
    let skip = false;
    let reload = false;
    let manageBackpack = false;
    let name = "";
    if (turn instanceof Initial) {
        highlights = { healingPotion: true };
        rollDice = true;
        useAmmoBag = true;

        name = "Initial";
    }
    if (turn instanceof HealingCardUsed) {
        rollDice = true;
        name = "HealingCardUsed";
    }

    if (turn instanceof AmmoBagUsed) {
        rollDice = true;
        name = "AmmoBagUsed";
    }
    if (turn instanceof MovementDiceRolled) {
        highlights = { movementCard: true };
        move = true;
        skip = true;
        name = "MovementDiceRolled";
    }

    if (turn instanceof MovementCardUsed) {
        move = true;
        name = "MovementCardUsed";
    }

    if (turn instanceof Moved) {
        highlights = { defensiveCard: true, throwableCard: true, weaponExtensionCard: true, loadedWeapons: true }

        reload = true;
        manageBackpack = true;
        name = "Moved";
    }
    if (turn instanceof DefensiveCardUsed) {
        highlights = { loadedWeapons: true }

        manageBackpack = true;
        reload = true;
        name = "DefensiveCardUsed";
    }
    if (turn instanceof ThrowableCardUsed) {
        highlights = { loadedWeapons: true }

        manageBackpack = true;
        reload = true;
        name = "ThrowableCardUsed";
    }
    if (turn instanceof WeaponExtensionCardUsed) {
        highlights = { loadedWeapons: true }
        name = "WeaponExtensionCardUsed";
    }
    if (turn instanceof TurnEnded) {
        name = "TurnEnded";
    }

    return <div>
        <h1>{name}</h1>
        <div className="row">
            <div className="col-md-3">
                {rollDice ? <Button>Roll Dice</Button> : ""}
                <br />
                {move ? <Button>Move</Button> : ""}
                <br />
                {skip ? <Button>Skip</Button> : ""}
                <br />
                {reload ? <Button>Reload</Button> : ""}
                <br />
                {manageBackpack ? <Button>Manage Backpack</Button> : ""}
            </div>
            <div className="col-md-9">
                <Character character={character} highlights={highlights} />
            </div>
        </div>

        <br />
    </div>
}
interface TurnProps {
    turn: TurnStateMachine,
    character: CharacterClass
}