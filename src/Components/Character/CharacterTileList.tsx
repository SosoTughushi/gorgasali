import Character from "../../gorgasali/Characters/Character";
import CharacterTile from "./CharacterTile";

export default function CharacterTileList({ characters, selectedCharacter, currentPlayer, onCharacterTileClick }: CharacterTileListProps) {
    const isSelected = (c: Character) => selectedCharacter !== undefined && c === selectedCharacter;
    const isCurrentPlayer = (c: Character) => currentPlayer === c;
    return <div className="character-tile-list">
        {characters.map(character =>
            <CharacterTile character={character} onCharacterTileClick={onCharacterTileClick} isSelected={isSelected(character)} isCurrentPlayer={isCurrentPlayer(character)} />
            )}
    </div>
}

interface CharacterTileListProps {
    characters: Character[];
    selectedCharacter: Character | undefined;
    currentPlayer: Character;

    onCharacterTileClick(tile: Character): void;
}