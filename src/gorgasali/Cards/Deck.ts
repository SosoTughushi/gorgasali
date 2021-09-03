import { BodyArmor, Helmet } from "./Support/Armor/Armor";
import AmmoBag from "./Support/Consumable/AmmoBag";
import { EagleEye, ExtraSix, SecondChance, StrikeOption } from "./Support/Consumable/GunSocket";
import { Adrenaline, Compass, Teleport } from "./Support/Consumable/MovementConsumables";
import ObstacleNulifier from "./Support/Consumable/ObstacleNulifier";
import Potion from "./Support/Consumable/Potion";
import BallLightning from "./Support/Defensive/BallLightning";
import Barrier from "./Support/Defensive/Barrier";
import MagicField from "./Support/Defensive/MagicField";
import TreePlatform from "./Support/Defensive/TreePlatform";
import SupportCard from "./Support/SupportCard";
import FlameBulb from "./Support/Throwable/FlameBulb";
import MagicSpear from "./Support/Throwable/MagicSpear";
import NTTBulb from "./Support/Throwable/NTTBulb";
import SmokeBulb from "./Support/Throwable/SmokeBulb";
import { kiss, janeli, tochinator, jalugar } from "./Weapons/MassiveWeaponCard";
import { kondor, breathold } from "./Weapons/ScoutWeaponCard";
import { scratch, elva, gemini, dobergun } from "./Weapons/SixShooterCard";
import { lynx, mantis, ibex, kbraus } from "./Weapons/StrikerWeaponCard";
import WeaponCard from "./Weapons/WeaponCard";

export default class Deck {
    public weaponCards: WeaponCard[]
    public supportCards: SupportCard[]
    constructor() {
        this.weaponCards = [
            kiss, // janeli, tochinator, jalugar, // MassiveWeapon
            kondor, // breathold, // Scout
            scratch, // elva, gemini, dobergun, // SixShooter
            lynx, // mantis, ibex, kbraus, // Striker
        ]
        this.supportCards = [
            new FlameBulb(), // 8x
            new MagicSpear(), // 8x
            new NTTBulb(), // 8x
            new SmokeBulb(), // 8x

            new Helmet(), // 15x
            new BodyArmor(), // 15x

            new BallLightning(), //3x
            new Barrier(), // 5x
            new MagicField(), // 8x
            new TreePlatform(), // 8x

            new Potion("Small", 20), // 15
            new Potion("Medium", 50), // 8
            new Potion("Large", 100), //5

            new ObstacleNulifier("water"), //15x
            new ObstacleNulifier("mountain"),//15x
            new ObstacleNulifier("forest"),//15x

            new SecondChance(), //8x
            new ExtraSix(), //8x
            new StrikeOption(), //8x
            new EagleEye(), //8x

            new Compass(),  // 8x
            new Teleport(), // 5x
            new Adrenaline(), // 5x

            new AmmoBag() // 5x
        ];
    }
}