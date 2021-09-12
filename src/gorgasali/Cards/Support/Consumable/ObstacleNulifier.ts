import Terrain from "../../../Terrain";
import TurnContext from "../../../Turn/TurnContext";
import MovementCardUsed from "../../../Turn/TurnStates/MovementCardUsed";
import { MovementConsumable } from "./MovementConsumables";

export default class ObstacleNulifier extends MovementConsumable {
    use(context: TurnContext): MovementCardUsed {
        context.obstaclePenaltyNulified = this.obstacle;
        return new MovementCardUsed(context);
    }

    constructor(public obstacle: ObstacleType) {
        super(mapObstacleToName(obstacle), "common", "Consumable", "Move on the " + obstacle + " without penalty",
            undefined, undefined, undefined, undefined);
    }
}

export type ObstacleType = "water" | "mountain" | "forest";

function mapObstacleToName(obstacle: ObstacleType): string {
    switch (obstacle) {
        case "forest": return "Axe";
        case "mountain": return "Mountain rope";
        case "water": return "Boat";
    }
}