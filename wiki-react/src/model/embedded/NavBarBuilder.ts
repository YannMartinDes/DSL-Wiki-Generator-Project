import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import WikiNavBar from "../kernel/models/wiki-nav-bar";

export class NavBarBuilder {
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<NavBarBuilder>

    /**
     * Used to edit the style of the title
     * @returns the title builder
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
     * Used to edit the style of the box of the nav bar
     * @returns the nav bar box style builder
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
