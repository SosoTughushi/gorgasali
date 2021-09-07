import Terrain from "../../../Terrain";
import { CardSpecialSkill } from "../../Card";
import { MovementConsumable } from "./MovementConsumables";

export default class ObstacleNulifier extends MovementConsumable {
    constructor(obstacle: "water" | "mountain" | "forest") {
        super(mapObstacleToName(obstacle), "common", "Consumable", new ObstacleNulifierSpecialSkill(obstacle),
            undefined, undefined, undefined, undefined);
    }
}

class ObstacleNulifierSpecialSkill extends CardSpecialSkill {
    constructor(obstacle: "water" | "mountain" | "forest") {
        super("Move on the " + obstacle + " without penalty");
    }
}

function mapObstacleToName(obstacle: "water" | "mountain" | "forest"): string {
    switch (obstacle) {
        case "forest": return "Axe";
        case "mountain": return "Mountain rope";
        case "water": return "Boat";
    }
}