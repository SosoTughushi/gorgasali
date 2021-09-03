
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faBrain, faUserSecret, faBookMedical, faSnowflake, faTheaterMasks, faFire, faDragon, faJedi, faEye } from '@fortawesome/free-solid-svg-icons';
import { CharacterName } from '../../gorgasali/Characters/Character';

export default function CharacterSymbol({name} : CharacterSymbolProps) {
    function getSymbol() {
        switch(name) {
            case "ARMAZI" : return faSun;
            case "EBUE" : return faBrain;
            case "VARAS": return faUserSecret;
            case "MEDEA": return faBookMedical;
            case "PRINCESS TSIVA": return faSnowflake;
            case "OCTOR" : return faTheaterMasks;
            case "KRUBER": return faEye;

            case "THARSIS": return faFire;
            case "D'RAIN": return faDragon;
            case "E'MOON": return faJedi;
        }
    }

    return <FontAwesomeIcon icon={getSymbol()} />
}

interface CharacterSymbolProps {
    name: CharacterName;
}