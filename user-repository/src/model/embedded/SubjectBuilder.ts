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
     * Permet d'editer le style de la boxdu sujet
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
     * Permet d'editer le style du contenu du sujet
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

    /**
     * Permet d'editer le style des chapitres
     * @returns Le builder du chapitre
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
     * Permet d'editer le style de la TOC
     * @returns Le builder de la TOC
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
     * Permet d'editer le dtyle du resumé
     * @returns Le builder qui edit le resumé
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
     * Permet d'editer le style de l'info box
     * @returns Le 
     */
    editInfoBoxStyle(){
        if(!this.infoBox){
            this.infoBox = new InfoBoxBuilder();
        }
        return this.infoBox;
    }

    /**
     * Permet d'editer le style des references
     * @returns Le builder de la reference
     */
    editReferenceStyle(){
        if(!this.reference){
            this.reference = new ReferenceBuilder();
        }
        return this.reference;
    }

    /**
     * Permet d'editer le style des sujets reliés
     * @returns Le builder des sujet relié
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
