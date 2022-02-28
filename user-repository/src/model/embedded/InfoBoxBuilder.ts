import WikiSummary from "../kernel/models/wiki-summary";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import WikiInfoBox from "../kernel/models/wiki-info-box";

export class InfoBoxBuilder {
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<InfoBoxBuilder>

    /**
     * Permet d'editer le style du bloc
     * @returns Le builder du bloc
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
     * Permet d'editer le style du contenu
     * @returns Le builder du contenu
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
