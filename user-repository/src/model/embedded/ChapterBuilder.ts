import WikiChapter from "../kernel/models/chapters/wiki-chapter"
import { BlockStyleBuilder } from "./BlockStyleBuilder"
import { ClassicChapterBuilder } from "./ClassicChapterBuilder"
import { TextStyleBuilder } from "./TextStyleBuilder"
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder"
import {GalleryBuilder} from "./GalleryBuilder";
import { TitleStyleBuilder } from "./TitleStyleBuilder"

export class ChapterBuilder {

    private classicChapter?:ClassicChapterBuilder
    private subChapter?:ChapterBuilder
    private title?:TitleStyleBuilder<ChapterBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<ChapterBuilder>
    private gallery?:GalleryBuilder
    private isSubChapter?:Boolean;

    constructor(isSubChapter:boolean){
        this.isSubChapter = isSubChapter;
    }

    /**
     * Permet d'editer le style des sous chapitres
     * @returns Le builder pour les sous chapitres
     */
    editSubChapterStyle(){
        if(this.isSubChapter){
            console.warn("You are overriding the current subchapter, try not chaining editSubChapterStyle()")
            return this;
        }

        let builder = this.subChapter;

        if(!builder){
            builder = new ChapterBuilder(true);
            this.subChapter = builder;
        }
        return builder;
    }

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
     * Permet d'editer le style de la box
     * @returns le builder de la box
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
     * Permet d'editer le style du contenu
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
     * Permet d'editer le style des chapitres classiques
     * @returns Le builder des chapitre classique
     */
    editClassicChapterStyle(){
        let builder = this.classicChapter;

        if(!builder){
            builder = new ClassicChapterBuilder();
            this.classicChapter = builder;
        }
        return builder;
    }

    editGalleryStyle(){
        if(!this.gallery){
            this.gallery = new GalleryBuilder();
        }
        return this.gallery;
    }

    createModel():WikiChapter{
        const classicChapter = this.classicChapter?.createModel();
        const subChapter = this.subChapter?.createModel();
        const title = this.title?.createModel();
        const content = this.content?.createModel();
        const block = this.block?.createModel();
        const gallery = this.gallery?.createModel();

        return new WikiChapter({
            subChapter:subChapter,
            title:title,
            classicChapter:classicChapter,
            content:content,
            block:block,
            gallery:gallery,
        })
    }

}
