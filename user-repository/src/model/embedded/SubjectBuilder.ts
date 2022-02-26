import WikiSubject from "../kernel/models/wiki-subject";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { ChapterBuilder } from "./ChapterBuilder";
import { SummaryBuilder } from "./SummaryBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { TOCBuilder } from "./TOCBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import {InfoBoxBuilder} from "./InfoBoxBuilder";
import { ReferenceBuilder } from "./ReferenceBuilder";
import { RelatedSubjectBuilder } from "./RelatedSubjectBuilder";
import { TitleStyleBuilder } from "./TitleStyleBuilder";

export class SubjectBuilder{
    private title?:TitleStyleBuilder<SubjectBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<SubjectBuilder>
    private summary?:SummaryBuilder
    private infoBox?:InfoBoxBuilder
    private reference?:ReferenceBuilder
    private relatedSubject?:RelatedSubjectBuilder
    private chapter?:ChapterBuilder
    private toc?:TOCBuilder

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


    editInfoBox(){
        if(!this.infoBox){
            this.infoBox = new InfoBoxBuilder();
        }
        return this.infoBox;
    }

    editReference(){
        if(!this.reference){
            this.reference = new ReferenceBuilder();
        }
        return this.reference;
    }

    editRelatedSubject(){
        if(!this.relatedSubject){
            this.relatedSubject = new RelatedSubjectBuilder();
        }
        return this.relatedSubject;
    }

    createModel(){
        const title = this.title?.createModel();
        const content = this.content?.createModel();
        const block = this.block?.createModel();
        const chapter = this.chapter?.createModel();
        const summary = this.summary?.createModel();
        const toc = this.toc?.createModel();
        const infoBox = this.infoBox?.createModel();
        const relatedSubject = this.relatedSubject?.createModel();
        const reference = this.reference?.createModel();

        return new WikiSubject({
            title:title,
            content:content,
            block:block,
            chapter:chapter,
            summary:summary,
            tableOfContent:toc,
            infoBox:infoBox,
            relatedSubject:relatedSubject,
            references:reference
        });
    }
}
