import TurnContext from "../TurnContext";



export default abstract class TurnStateBase {
    constructor(protected context: TurnContext) {
        console.log(context);
    }
}
