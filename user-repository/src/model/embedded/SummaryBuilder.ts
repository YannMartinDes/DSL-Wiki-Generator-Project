import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class SummaryBuilder {
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<SummaryBuilder>

    editBlock(){
        const builder = new BlockStyleBuilder(this);
        this.block = builder;
        return builder;
    }

    editContent(){
        const builder = new WikiElementStyleBuilder();
        this.content = builder;
        return builder;
    }

    createModel(){
        //TODO
    }
}