import WikiChapter from "../kernel/models/chapters/wiki-chapter"
import { BlockStyleBuilder } from "./BlockStyleBuilder"
import { ClassicChapterBuilder } from "./ClassicChapterBuilder"
import { TextStyleBuilder } from "./TextStyleBuilder"
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder"
import {GalleryBuilder} from "./GalleryBuilder";
import {BibliographyBuilder} from "./BibliographyBuilder";

export class ChapterBuilder {

    private classicChapter?:ClassicChapterBuilder
    private subChapter?:ChapterBuilder
    private title?:TextStyleBuilder<ChapterBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<ChapterBuilder>
    private gallery?:GalleryBuilder
    private bibliography?:BibliographyBuilder
    private isSubChapter?:Boolean;

    constructor(isSubChapter:boolean){
        this.isSubChapter = isSubChapter;
    }

    editSubChapter(){
        if(this.isSubChapter){
            console.warn("You are overriding a subchapter, try not chaining editSubChapter()")
            return this;
        }

        let builder = this.subChapter;

        if(!builder){
            builder = new ChapterBuilder(true);
            this.subChapter = builder;
        }
        return builder;
    }

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

    editClassicChapter(){
        let builder = this.classicChapter;

        if(!builder){
            builder = new ClassicChapterBuilder();
            this.classicChapter = builder;
        }
        return builder;
    }

    editGallery(){
        if(!this.gallery){
            this.gallery = new GalleryBuilder();
        }
        return this.gallery;
    }

    editBibliography(){
        if(!this.bibliography){
            this.bibliography = new BibliographyBuilder();
        }
        return this.bibliography;
    }

    createModel():WikiChapter{
        const classicChapter = this.classicChapter?.createModel();
        const subChapter = this.subChapter?.createModel();
        const title = this.title?.createModel();
        const content = this.content?.createModel();
        const block = this.block?.createModel();
        const gallery = this.gallery?.createModel();
        const bibliography = this.bibliography?.createModel();

        return new WikiChapter({
            subChapter:subChapter,
            title:title,
            classicChapter:classicChapter,
            content:content,
            block:block,
            gallery:gallery,
            bibliography:bibliography
        })
    }

}
