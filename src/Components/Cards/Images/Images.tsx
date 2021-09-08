import React from 'react';

export default function Images({ name, type }: ImageProps) {
    let src = "";
    if(type === "SixShooter") {
        src = "Dagger.svg";
    }
    if(type === "Striker") {
        src = "Sword.svg";
    }
    if(type === "MassiveWeapon") {
        src = "Mace.svg";
    }
    if(type === "Scout") {
        src = "Spear.svg";
    }

    if(type === "Throwable") {
        if(name === "Flame bulb") {
            src = "FlameBulb.svg"
        }
        if(name === "Magic spear") {
            src = "MagicSpear.svg"
        }
        if(name === "NTT bulb") {
            src = "NttBulb.svg";
        }
        if(name === "Smoke bulb") {
            src = "SmokeBulb.svg";
        }
    }

    if(type === "Armor") {
        if(name == "Helmet") {
            src = "Helmet.svg"
        }
        if(name === "Body armor"){
            src = "BodyArmor.svg"
        }
    }

    if(type === "Defensive") {
        if(name === "Ball lightning") {
            src = "LightningBall.svg"
        }
        if(name === "Barrier") {
            src = "Barrier.svg"
        }
        if(name === "Magic field") {
            src = "MagicFields.svg";
        }
        if(name === "Tree platform") {
            src = "TreePlatform.svg";
        }
    }

    if(name === "Small potion") {
        src = "SmallPotion.svg"
    }
    if(name == "Medium potion") {
        src = "MediumPotion.svg"
    }
    if(name === "Large potion") {
        src = "LargePotion.svg"
    }

    if(name === "Axe") {
        src = "Axe.svg";
    }
    if(name === "Boat") {
        src = "Boat.svg";
    }
    if(name === "Mountain rope") {
        src = "Rope.svg";
    }


    if(name === "Second chance") {
        src = "SecondChance.svg"
    }
    if(name === "Extra six") {
        src = "ExtraSix.svg";
    }
    if(name === "Strike option") {
        src = "StrikeOption.svg";
    }
    if(name === "Eagle eye") {
        src = "EagleEye.svg"
    }

    if(name === "Teleport") {
        src = "Teleport.svg";
    }
    if(name === "Adrenaline") {
        src = "Adrenaline.svg";
    }
    if(name === "Compass") {
        src = "Compass.svg"
    }

    if(name === "Ammo bag") {
        src = "AmmoBag.svg";
    }

    src = window.location.origin + "/images/cards/" + src;

    return <img width="180px" height="150px" src={src} alt="image" />
}

interface ImageProps {
    name: string;
    type: string;
}