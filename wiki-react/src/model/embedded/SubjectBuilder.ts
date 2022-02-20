import WikiSubject from "../kernel/models/wiki-subject";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { ChapterBuilder } from "./ChapterBuilder";
import { SummaryBuilder } from "./SummaryBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { TOCBuilder } from "./TOCBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class SubjectBuilder{
    private title?:TextStyleBuilder<SubjectBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<SubjectBuilder>
    private summary?:SummaryBuilder
    private chapter?:ChapterBuilder
    private toc?:TOCBuilder

    editTitle(){
        let builder = this.title;

        if(!builder){
            builder = new TextStyleBuilder(this);
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

    editChapter(){
        let builder = this.chapter;

        if(!builder){
            builder = new ChapterBuilder(false);
            this.chapter = builder;
        }
        return builder;
    }

    editTableOfContent(){
        let builder = this.toc;

        if(!builder){
            builder = new TOCBuilder();
            this.toc = builder;
        }
        return builder;
    }

    editSummary(){
        let builder = this.summary;

        if(!builder){
            builder = new SummaryBuilder();
            this.summary = builder;
        }
        return builder;
    }

    createModel(){
        const title = this.title?.createModel();
        const content = this.content?.createModel();
        const block = this.block?.createModel();
        const chapter = this.chapter?.createModel();
        const summary = this.summary?.createModel();
        const toc = this.toc?.createModel();

        return new WikiSubject({
            title:title, 
            content:content, 
            block:block, 
            chapter:chapter, 
            summary:summary, 
            tableOfContent:toc
        });
    }
}