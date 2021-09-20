import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dice } from "../../../gorgasali/Turn/TurnContext";

export default function DiceResult({ result }: DiceProps) {
    let dice = faDiceOne;
    switch (result) {
        case 2: dice = faDiceTwo;
            break;
        case 3: dice = faDiceThree;
            break;
        case 4: dice = faDiceFour;
            break;
        case 5: dice = faDiceFive;
            break;
        case 6: dice = faDiceSix;
    }
    return <span><FontAwesomeIcon icon={dice} /></span>
}
interface DiceProps {
    result: Dice;
}