
import './Tile.scss';
import TileClass from "../../gorgasali/Tile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons'
import CharacterSymbol from '../Character/CharacterSybol';

export default function Tile({ tile, onTileClick, attributes }: TileProps) {

  const minDist = tile.minDistance;


  let classes = " tile zone" + tile.zone + " " + tile.terrain;

  classes += getZoneBorderClass(minDist, tile);
  classes += getAttributeClasses(attributes);

  return (
    <span className={classes} onClick={(ev) => onTileClick(tile)} >
      {tile.hasBox ? (<FontAwesomeIcon icon={faBox} />) : ("")}
      {tile.character ? (<h2><CharacterSymbol name={tile.character.name} /></h2>) : ("")}
    </span>
  );
}

function getZoneBorderClass(minDist: number, tile: TileClass) {
  let borders = "";
  if ([3, 7, 10, 13].indexOf(minDist - 1) !== -1) { // corner

    if (minDist === tile.x) {
      borders += " left-border";
    }
    if (minDist === 29 - tile.x) {
      borders += " right-border";
    }

    if (minDist === tile.y) {
      borders += " top-border";
    }
    if (minDist === 29 - tile.y) {
      borders += " bottom-border";
    }
  }
  return borders;
}

function getAttributeClasses(attributes: TileVisualAttributes) {
  if (attributes.isSelected) {
    return " character-selected";
  }
  return "";
}

interface TileProps {
  tile: TileClass,
  attributes: TileVisualAttributes,
  onTileClick(tile: TileClass): void;
}

export interface TileVisualAttributes {
  isSelected?: boolean;
}

