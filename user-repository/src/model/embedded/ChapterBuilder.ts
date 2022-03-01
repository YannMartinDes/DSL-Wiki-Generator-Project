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
    private gallery?:GalleryBuilder<ChapterBuilder>
    private isSubChapter?:Boolean;

    constructor(isSubChapter:boolean){
        this.isSubChapter = isSubChapter;
    }

    /**
     * Used to edit the style of the subchapters
     * @returns the subchapters style builder
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
     * Used to edit the style of the box of the chapter
     * @returns the chapter box style builder
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
     * Used to edit the style of the elements of the chapter
     * @returns the chapter elements style builder
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
     * Used to edit the style of the classic chapter
     * @returns the classic chapter style builder
     */
    editClassicChapterStyle(){
        let builder = this.classicChapter;

        if(!builder){
            builder = new ClassicChapterBuilder();
            this.classicChapter = builder;
        }
        return builder;
    }

    /**
     * Used to edit the style of the gallery
     * @returns the the gallery style builder
     */
    editGalleryStyle(){
        if(!this.gallery){
            this.gallery = new GalleryBuilder(this);
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
