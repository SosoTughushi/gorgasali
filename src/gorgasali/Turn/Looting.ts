import TurnContext from "./TurnContext";
import TurnStateBase from "./TurnStates/TurnStateBase";
import SupportCard from "c:/Soso/Projects/gorgasali-git/src/gorgasali/Cards/Support/SupportCard";
import WeaponCard from "../Cards/Weapons/WeaponCard";
import { CardSlotBase } from "../Characters/CardSlot";
import Moved from "./TurnStates/Moved";
import { Card } from "../Cards/Card";

export class LootingInProgress extends TurnStateBase {
    public box: Box;
    constructor(context: TurnContext, box?: Box) {
        super(context);
        if (!box) {
            box = {
                support1: context.deck.getRandomSupportCard(),
                support2: context.deck.getRandomSupportCard(),
                weapon: context.deck.getRandomWeaponCard(),
            }
        }

        this.box = box;
    }

    select(card: Card) {
        return new LootedCardSelected(this.context, this.box, card);
    }
}

export class LootedCardSelected extends TurnStateBase {
    constructor(context: TurnContext, public box: Box, public card: Card) {
        super(context);
    }

    discard() {
        if (this.box.support1 === this.card) {
            this.box.support1 = undefined;
        }
        if (this.box.support2 === this.card) {
            this.box.support2 = undefined;
        }
        if (this.box.weapon === this.card) {
            this.box.weapon = undefined;
        }

        if(this.box.support1 === undefined &&
            this.box.support2 === undefined &&
            this.box.weapon === undefined) {
                this.context.board.getTiles()[this.context.board.currentPlayerPosition].setBox(false);
                return new Moved(this.context);
            }

        return new LootingInProgress(this.context, this.box);
    }

    cancel() {
        return new LootingInProgress(this.context, this.box);
    }

    equip(cardSlot: CardSlotBase) {
        cardSlot.card = this.card;

        return this.discard();
    }
}

export type LootState = LootingInProgress | LootedCardSelected;


type Box = {
    support1?: SupportCard;
    support2?: SupportCard;
    weapon?: WeaponCard;
}