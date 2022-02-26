import WikiTableOfContent from "../kernel/models/wiki-table-of-content";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { TitleStyleBuilder } from "./TitleStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class TOCBuilder{
    private title?:TitleStyleBuilder<TOCBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<TOCBuilder>

    editTitle(){
        let builder = this.title;

        if(!builder){
            builder = new TitleStyleBuilder(this);
            this.title = builder;
        }
        return builder;
    }

    editBlock(){
        let builder = this.block;

        if(!builder){
            builder = new BlockStyleBuilder(this);
            this.block = builder;
        }
        return builder;
    }

    editContent(){
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