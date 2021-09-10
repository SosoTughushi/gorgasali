import Terrain from "../../../Terrain";
import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import { MovementConsumable } from "./MovementConsumables";

export default class ObstacleNulifier extends MovementConsumable {
    constructor(obstacle: "water" | "mountain" | "forest") {
        super(mapObstacleToName(obstacle), "common", "Consumable", new ObstacleNulifierSpecialSkill(obstacle),
            undefined, undefined, undefined, undefined);
    }
}

export type ObstacleType = "water" | "mountain" | "forest";

class ObstacleNulifierSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        throw new Error("Method not implemented.");
    }
    constructor(obstacle: ObstacleType) {
        super("Move on the " + obstacle + " without penalty");
    }
}

function mapObstacleToName(obstacle: ObstacleType): string {
    switch (obstacle) {
        case "forest": return "Axe";
        case "mountain": return "Mountain rope";
        case "water": return "Boat";
    }
}