import TurnStateBase from "./TurnStateBase";

export default class TurnEnded extends TurnStateBase {
    public state: "TurnEnded" = "TurnEnded";
    public order = 9;
}
