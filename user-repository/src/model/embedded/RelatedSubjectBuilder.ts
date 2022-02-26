import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import WikiRelatedSubject from "../kernel/models/wiki-related-subject";
import { TitleStyleBuilder } from "./TitleStyleBuilder";

export class RelatedSubjectBuilder{

    private title?:TitleStyleBuilder<RelatedSubjectBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<RelatedSubjectBuilder>


    editTitleStyle(){
        let builder = this.title;

        if(!builder){
            builder = new TitleStyleBuilder(this);
            this.title = builder;
        }
        return builder;
    }

    editContentBoxStyle(){
        let builder = this.block;

        if(!builder){
            builder = new BlockStyleBuilder(this);
            this.block = builder;
        }
        return builder;
    }

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

        return new WikiRelatedSubject({title:title,content:content,block:block});
    }
}
