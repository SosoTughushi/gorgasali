import React from 'react';

export default function Images({ name, type }: ImageProps) {
    let src = "";
    if(type === "SixShooter") {
        src = "https://img.favpng.com/11/0/20/crossfire-knife-melee-weapon-wiki-png-favpng-e94UqXmPjcH1FtPXGbFJ1r3wq.jpg";
    }
    if(type === "Striker") {
        src = "https://www.nicepng.com/png/detail/18-180156_transparent-dagger-medieval-dagger-icon-transparent-background.png";
    }
    if(type === "MassiveWeapon") {
        src = "https://freepngimg.com/thumb/weapon/24377-5-weapon-transparent-image.png";
    }
    if(type === "Scout") {
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5HYZQvFO08wkS41geK4VMj3DioIDSPJ1gg&usqp=CAU";
    }

    if(type === "Throwable") {
        if(name === "Flame bulb") {
            src = "http://assets.stickpng.com/images/580b585b2edbce24c47b2651.png"
        }
        if(name === "Magic spear") {
            src = "https://i.pinimg.com/originals/e8/ac/8f/e8ac8f50e47fdc328432ba366638bff4.png"
        }
        if(name === "NTT bulb") {
            src = "https://www.freeiconspng.com/thumbs/reload-icon/reload-icon-4.png";
        }
        if(name === "Smoke bulb") {
            src = "https://www.seekpng.com/png/full/12-125629_white-smoke-transparent-smoke-transparent.png";
        }
    }

    if(type === "Armor") {
        if(name == "Helmet") {
            src = "https://www.inkspired.ro/media/catalog/product/cache/1/image/500x500/3de37283ddf23e1390f09983ed9630a3/C/l/Classic_Magneto_Helmet.png"
        }
        if(name === "Body armor"){
            src = "https://cdn.nohat.cc/thumb/f/720/comhiclipartnlpvp.jpg"
        }
    }

    if(type === "Defensive") {
        if(name === "Ball lightning") {
            src = "https://image.pngaaa.com/504/4411504-middle.png"
        }
        if(name === "Barrier") {
            src = "https://www.pngfind.com/pngs/m/612-6126429_barrier-closed-comments-barrier-icon-png-transparent-png.png"
        }
        if(name === "Magic field") {
            src = "https://cdn.staticcrate.com/stock-hd/effects/footagecrate-magicforcefield1-full-prev-full.png";
        }
        if(name === "Tree platform") {
            src = "https://toppng.com/uploads/preview/transparent-green-tree-clipart-picture-transparent-background-tree-clipart-11562885755m5oazld2cb.png";
        }
    }

    if(name === "Small potion") {
        src = "https://img1.pnghut.com/10/8/13/17utAvgc8e/potions-in-harry-potter-potion-glass-bottle-liquid-elixir.jpg"
    }
    if(name == "Medium potion") {
        src = "https://www.clipartmax.com/png/middle/263-2632325_empty-bottle-potion-magic-potion-png.png"
    }
    if(name === "Large potion") {
        src = "https://www.pngkit.com/png/full/152-1528190_blue-potion-by-shivali-potion-transparent-background.png"
    }

    if(name === "Axe") {
        src = "https://www.pngfind.com/pngs/m/44-443587_free-png-axe-png-images-transparent-axe-transparent.png"
    }
    if(name === "Boat") {
        src = "https://www.pngfind.com/pngs/m/194-1941282_blue-boat-transparent-png-transparent-background-blue-boat.png";
    }
    if(name === "Mountain rope") {
        src = "https://www.pikpng.com/pngl/m/301-3015882_rock-climbing-rope-png-clipart.png"
    }


    if(name === "Second chance") {
        src = "https://s3-us-gov-west-1.amazonaws.com/mnlottery.cms.assets/2nd-Chance/2nd-Chance-Icon-sm.png"
    }
    if(name === "Extra six") {
        src = "https://img1.pnghut.com/21/12/3/MS76jdYUhk/dice-android-game-games-point.jpg";
    }
    if(name === "Strike option") {
        src = "https://static.thenounproject.com/png/3899935-200.png";
    }
    if(name === "Eagle eye") {
        src = "https://www.clipartmax.com/png/middle/201-2018084_eyeball-clipart-eye-symbol-eagle-eye-logo-designs.png"
    }

    if(name === "Teleport") {
        src = "https://toppng.com/uploads/preview/ortal-logo-png-transparent-portal-2-blue-portal-11563019624rgihkxpwyb.png";
    }
    if(name === "Adrenaline") {
        src = "https://www.pikpng.com/pngl/m/32-320917_heartbeat-transparent-adrenaline-adrenaline-structure-clipart.png";
    }
    if(name === "Compass") {
        src = "https://www.pngfind.com/pngs/m/59-591287_compass-transparent-compass-rose-vector-free-hd-png.png"
    }

    if(name === "Ammo bag") {
        src = "https://img1.pnghut.com/17/7/20/mU5p69s5ig/handbag-bag-762-mm-caliber-firearm-weapon.jpg";
    }

    return <img width="180px" height="150px" src={src} alt="image" />
}

interface ImageProps {
    name: string;
    type: string;
}