import WikiReferences from "../kernel/models/wiki-references";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { TitleStyleBuilder } from "./TitleStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class ReferenceBuilder{

    private title?:TitleStyleBuilder<ReferenceBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<ReferenceBuilder>

    /**
     * Permet d'editer le style du titre
     * @returns Le builter du titre
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
     * Permet d'editer le style de la box de reference
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
     * Permet d'editer le style du contenu de reference
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
        const title = this.title?.createModel();
        const content = this.content?.createModel();
        const block = this.block?.createModel();

        return new WikiReferences({title:title,content:content,block:block});
    }
}
