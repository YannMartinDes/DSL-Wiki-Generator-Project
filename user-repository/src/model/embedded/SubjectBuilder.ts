import WikiSubject from "../kernel/models/wiki-subject";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { ChapterBuilder } from "./ChapterBuilder";
import { ClassicChapterBuilder } from "./ClassicChapterBuilder";
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
        const builder = new TextStyleBuilder(this);
        this.title = builder;
        return builder;
    }

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

    editChapter(){
        const builder = new ChapterBuilder()
        this.chapter = builder;
        return builder;
    }

    editTableOfContent(){
        const builder = new TOCBuilder();
        this.toc = builder;
        return builder;
    }

    editSummary(){
        const builder = new SummaryBuilder();
        this.summary = builder;
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