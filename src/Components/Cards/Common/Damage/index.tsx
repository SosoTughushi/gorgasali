import WeaponDamage from "../../../../gorgasali/Cards/Weapons/WeaponDamage";
import "./Damage.scss";
import { faBomb, faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Damage({ damage }: DamageProps) {
    let icon = damage.isFixed ? faBomb : faSkull;
    
    return <span><FontAwesomeIcon icon={icon} />{damage.value}</span>
}

interface DamageProps {
    damage: WeaponDamage
}