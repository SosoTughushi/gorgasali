import { faDice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dice({ count }: DiceProps) {
    return <span><FontAwesomeIcon icon={faDice} />{count}</span>
}
interface DiceProps {
    count: number;
}