import WikiTableOfContent from "../kernel/models/wiki-table-of-content";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { TitleStyleBuilder } from "./TitleStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class TOCBuilder{
    private title?:TitleStyleBuilder<TOCBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<TOCBuilder>

    /**
     * Permet d'editer le style du titre
     * @returns Le builder du titre
     */
    editTitleStyle(){
        let builder = this.title;

        if(!builder){
            builder = new TitleStyleBuilder(this);
            this.title = builder;
        }
        return builder;
    }

    /**
     * Permet d'editer le style de la box du contenu de la TOC
     * @returns Le builder de la box du contenu de la TOC
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
     * Permet d'editer le style des elements de la TOC
     * @returns Le builder qui permet d'editer le style des elements de la TOC
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
        const title = this.title?.createModel();
        const block = this.block?.createModel();
        const content = this.content?.createModel();

        return new WikiTableOfContent({content:content, title:title, block:block});
    }
}