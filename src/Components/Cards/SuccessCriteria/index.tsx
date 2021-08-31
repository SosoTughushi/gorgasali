import { ScoutRangeMinRoll } from "../../../gorgasali/Cards/Weapons/ScoutWeaponCard";

import { faCheckCircle, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SuccessCriteria({ criteria }: SuccessCriteriaProps) {
    if (typeof criteria === "number") {
        const critNo = criteria as number;

        return <span><FontAwesomeIcon icon={faCheckCircle} />{critNo}+</span>
    }

    const ranges = criteria as ScoutRangeMinRoll[];

    return <table>
        <tr>
            <td><span><FontAwesomeIcon icon={faLocationArrow} /></span> </td>
            {ranges.map(r => <td>{r.range}</td>)}
        </tr>
        <tr>
            <td><span><FontAwesomeIcon icon={faCheckCircle} /></span></td>
            {ranges.map(r => <td>{r.minRoll}</td>)}
        </tr>
    </table>
}

interface SuccessCriteriaProps {
    criteria: number | ScoutRangeMinRoll[] 
}