
import './Tile.scss';
import TileClass from "../../gorgasali/Tile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons'
import CharacterSymbol from '../Character/CharacterSybol';

export default function Tile({ tile, onTileClick }: TileProps) {

  const minDist = tile.minDistance;


  let classes = " tile zone" + tile.zone + " " + tile.terrain;

  if ([3, 7, 10, 13].indexOf(minDist - 1) !== -1) { // corner

    if (minDist === tile.x) {
      classes += " left-border";
    }
    if (minDist === 29 - tile.x) {
      classes += " right-border";
    }

    if (minDist === tile.y) {
      classes += " top-border";
    }
    if (minDist === 29 - tile.y) {
      classes += " bottom-border";
    }
  }



  return (
    <span className={classes} onClick={(ev) => onTileClick(tile)} >
      {tile.hasBox ? (<FontAwesomeIcon icon={faBox} />) : ("")}
      {tile.character ? (<h2><CharacterSymbol name={tile.character.name} /></h2>) : ("")}
    </span>
  );
}

interface TileProps {
  tile: TileClass,
  onTileClick(tile: TileClass): void;
}

