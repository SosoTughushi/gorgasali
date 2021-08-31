
import './Tile.scss';
import TileClass from "../../gorgasali/Tile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons'

function Tile({ tile }: TileProps) {

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
    <span className={classes} >
      {tile.hasBox ? (<FontAwesomeIcon icon={faBox}/>) : ("")}
    </span>
  );
}

interface TileProps {
  tile: TileClass
}

export default Tile;
