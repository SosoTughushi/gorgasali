import { BodyArmor, Helmet } from "./Support/Armor/Armor";
import AmmoBag from "./Support/Consumable/AmmoBag";
import { EagleEye, ExtraSix, SecondChance, StrikeOption } from "./Support/Consumable/GunSocket";
import Compass from "./Support/Consumable/MovementConsumables/Compass";
import Adrenaline from "./Support/Consumable/MovementConsumables/Adrenaline";
import Teleport from "./Support/Consumable/MovementConsumables/Teleport";
import ObstacleNulifier from "./Support/Consumable/MovementConsumables/ObstacleNulifier";
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
    private weaponCards: WeaponCard[]
    private supportCards: SupportCard[]
    constructor() {
        this.weaponCards = [
            kiss, janeli, tochinator, jalugar, // MassiveWeapon
            kondor, breathold, // Scout
            scratch, elva, gemini, dobergun, // SixShooter
            lynx, mantis, ibex, kbraus, // Striker
        ]

        function repeat<T extends SupportCard>(creator: () => T, times: number) {
            const arr: SupportCard[] = [];
            for (let i = 0; i < times; i++) arr.push(creator());
            return arr;
        }

        this.supportCards =
            repeat(() => new FlameBulb(), 8)
                .concat(repeat(() => new MagicSpear(), 8))
                .concat(repeat(() => new NTTBulb(), 8))
                .concat(repeat(() => new SmokeBulb(), 8))

                .concat(repeat(() => new Helmet(), 15))
                .concat(repeat(() => new BodyArmor(), 15))

                .concat(repeat(() => new BallLightning(), 3))
                .concat(repeat(() => new Barrier(), 5))
                .concat(repeat(() => new MagicField(), 8))
                .concat(repeat(() => new TreePlatform(), 8))

                .concat(repeat(() => new Potion("Small"), 15))
                .concat(repeat(() => new Potion("Medium"), 8))
                .concat(repeat(() => new Potion("Large"), 5))

                .concat(repeat(() => new ObstacleNulifier("water"), 15))
                .concat(repeat(() => new ObstacleNulifier("mountain"), 15))
                .concat(repeat(() => new ObstacleNulifier("forest"), 15))

                .concat(repeat(() => new SecondChance(), 8))
                .concat(repeat(() => new ExtraSix(), 8))
                .concat(repeat(() => new StrikeOption(), 8))
                .concat(repeat(() => new EagleEye(), 8))

                .concat(repeat(() => new Compass(), 8))
                .concat(repeat(() => new Teleport(), 5))
                .concat(repeat(() => new Adrenaline(), 5))

                .concat(repeat(() => new AmmoBag(), 5));
    }

    public getRandomSupportCard(): SupportCard {
        const randomIndex = Math.floor(Math.random() * this.supportCards.length);
        const value = this.supportCards[randomIndex];
        this.supportCards.splice(randomIndex, 1);
        return value;
    }

    public getRandomWeaponCard(): WeaponCard {
        const randomIndex = Math.floor(Math.random() * this.weaponCards.length);
        const value = this.weaponCards[randomIndex];
        this.weaponCards.splice(randomIndex, 1);
        return value;
    }

}