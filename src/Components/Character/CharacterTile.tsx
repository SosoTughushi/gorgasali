import { CharacterBase } from "../../gorgasali/Characters/Character";
import "./Character.scss";
import CharacterSymbol from "./CharacterSybol";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { convertToCssClass } from ".";

export default function CharacterTile({ character, onCharacterTileClick, isSelected }: CharacterTileProps) {
    return <div className={"character-tile " + (isSelected? "selected-tile" : "")} onClick={_ => onCharacterTileClick(character)}>
        <div className="row">
            <div className="col-md-4">
                <div className={"tile-image " + convertToCssClass(character.name)} />
            </div>
            <div className="col-md-8">
                <h3><CharacterSymbol name={character.name} /> {character.name}</h3>
                <ProgressBar>
                    <ProgressBar variant="success" now={character.health} key={1} animated label={character.health} />
                    <ProgressBar variant="danger" now={100 - character.health} key={3} animated />
                </ProgressBar>
                {character.ability.cooldown ? (
                    <ProgressBar now={(character.ability.charge) / character.ability.cooldown * 100} />
                ) : ""}
            </div>
        </div>

    </div>
}

interface CharacterTileProps {
    character: CharacterBase,
    isSelected: boolean,
    onCharacterTileClick(tile: CharacterBase): void;
}