import ScoutWeaponCard from '../../gorgasali/Cards/Weapons/ScoutWeaponCard';
import { noSpecialSkill } from '../../gorgasali/Cards/Weapons/WeaponSpecialSkill';
import MassiveWeaponCard from '../../gorgasali/Cards/Weapons/MassiveWeaponCard';
import MagicField from '../../gorgasali/Cards/Support/Defensive/MagicField';
import ObstacleNulifier from '../../gorgasali/Cards/Support/Consumable/MovementConsumables/ObstacleNulifier';
import { BodyArmor, Helmet } from '../../gorgasali/Cards/Support/Armor/Armor';
import Character from '../../gorgasali/Characters/Character';
import Teleport from "../../gorgasali/Cards/Support/Consumable/MovementConsumables/Teleport";
import SmokeBulb from '../../gorgasali/Cards/Support/Throwable/SmokeBulb';
import FlameBulb from '../../gorgasali/Cards/Support/Throwable/FlameBulb';
import AmmoBag from '../../gorgasali/Cards/Support/Consumable/AmmoBag';

export function createCharacter(ebue: Character) {
  ebue.damage(40);
  ebue.weaponSlot1.card = new ScoutWeaponCard("Scum", "epic", 22, noSpecialSkill);
  ebue.weaponSlot2.card = new MassiveWeaponCard("Grdzaaa", "rare", 143, noSpecialSkill, 60);
  ebue.weaponSlot2.needsReload = true;
  ebue.defensiveConsumable.card = new MagicField();

  ebue.consumable1.card = new AmmoBag();
  ebue.consumable2.card = new Teleport();

  ebue.throwable.card = new FlameBulb();
  ebue.helmet.card = new Helmet();
  ebue.bodyArmor.card = new BodyArmor();
  ebue.consumableBagSlot1.card = new ObstacleNulifier("mountain");
  ebue.consumableBagSlot2.card = new Teleport();
  ebue.throwableBagSlot.card = new SmokeBulb();
  return ebue;
}
