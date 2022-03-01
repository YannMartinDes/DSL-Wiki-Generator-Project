import WikiSummary from "../kernel/models/wiki-summary";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import WikiInfoBox from "../kernel/models/wiki-info-box";

export class InfoBoxBuilder {
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<InfoBoxBuilder>

    /**
     * Used to edit the style of the box of the info box
     * @returns the info box box style builder
     */
    editContentBoxStyle(){
        let builder = this.block;

        if(!builder){
            builder = new BlockStyleBuilder(this);
            this.block = builder;
        }
        return builder;
    }

    /**
     * Used to edit the style of the elements of the info box
     * @returns the info box elements style builder
     */
    editContentStyle(){
        let builder = this.content;

        if(!builder){
            builder = new WikiElementStyleBuilder();
            this.content = builder;
        }
        return builder;
    }

    createModel(){
        const content = this.content?.createModel();
        const block = this.block?.createModel();

        return new WikiInfoBox({content:content, block:block});
    }
}
