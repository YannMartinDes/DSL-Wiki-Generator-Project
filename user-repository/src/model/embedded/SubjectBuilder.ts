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

    /**
     * Used to edit the style of the title
     * @returns the title builder
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
     * Used to edit the style of the box of the subject
     * @returns the subject box style builder
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
     * Used to edit the style of the elements of the subject
     * @returns the subject elements style builder
     */
    editContentStyle(){
        let builder = this.content;

        if(!builder){
            builder = new WikiElementStyleBuilder();
            this.content = builder;
        }
        return builder;
    }

    /**
     * Used to edit the style of the chapters
     * @returns the chapters style builder
     */
    editChapterStyle(){
        let builder = this.chapter;

        if(!builder){
            builder = new ChapterBuilder(false);
            this.chapter = builder;
        }
        return builder;
    }

    /**
     * Used to edit the style of the table of content
     * @returns the table of content style builder
     */
    editTableOfContentStyle(){
        let builder = this.toc;

        if(!builder){
            builder = new TOCBuilder();
            this.toc = builder;
        }
        return builder;
    }

    /**
     * Used to edit the style of the summary
     * @returns the summary style builder
     */
    editSummaryStyle(){
        let builder = this.summary;

        if(!builder){
            builder = new SummaryBuilder();
            this.summary = builder;
        }
        return builder;
    }

    /**
     * Used to edit the style of the info box
     * @returns the info box style builder
     */
    editInfoBoxStyle(){
        if(!this.infoBox){
            this.infoBox = new InfoBoxBuilder();
        }
        return this.infoBox;
    }

    /**
     * Used to edit the style of the references
     * @returns the references style builder
     */
    editReferenceStyle(){
        if(!this.reference){
            this.reference = new ReferenceBuilder();
        }
        return this.reference;
    }

    /**
     * Used to edit the style of the related subjects
     * @returns the related subjects style builder
     */
    editRelatedSubjectStyle(){
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
