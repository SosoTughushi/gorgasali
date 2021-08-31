
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Range({ range }: RangeProps) {
    const text = range > 1 ? "1-" + range : range.toString();
    return <span><FontAwesomeIcon icon={faLocationArrow} />{text}</span>
}

interface RangeProps {
    range: number;
}