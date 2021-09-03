import { CharacterBase } from "../../gorgasali/Characters/Character";
import CharacterTile from "./CharacterTile";

export default function CharacterTileList({ characters, selectedCharacter, onCharacterTileClick }: CharacterTileListProps) {
    const isSelected = (c: CharacterBase) => selectedCharacter !== undefined && c === selectedCharacter;
    return <div className="character-tile-list">
        {characters.map(character =>
            <CharacterTile character={character} onCharacterTileClick={onCharacterTileClick} isSelected={isSelected(character)} />
            )}
    </div>
}

interface CharacterTileListProps {
    characters: CharacterBase[];
    selectedCharacter: CharacterBase | undefined;

    onCharacterTileClick(tile: CharacterBase): void;
}