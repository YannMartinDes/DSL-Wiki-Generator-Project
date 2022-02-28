import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import WikiNavBar from "../kernel/models/wiki-nav-bar";

export class NavBarBuilder {
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<NavBarBuilder>

    /**
     * Permet d'editer le style de la box
     * @returns Le builder de la box
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

        return new WikiNavBar({content:content, block:block});
    }
}
