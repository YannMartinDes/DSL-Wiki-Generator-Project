import WikiChapter from "../kernel/models/chapters/wiki-chapter"
import { BlockStyleBuilder } from "./BlockStyleBuilder"
import { ClassicChapterBuilder } from "./ClassicChapterBuilder"
import { TextStyleBuilder } from "./TextStyleBuilder"
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder"

export class ChapterBuilder {

    private classicChapter?:ClassicChapterBuilder
    private subChapter?:ChapterBuilder
    private title?:TextStyleBuilder<ChapterBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<ChapterBuilder>

    editSubChapter(){
        const builder = new ChapterBuilder();
        this.subChapter = builder;
        return builder;
    }

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

    editClassicChapter(){
        const builder = new ClassicChapterBuilder();
        this.classicChapter = builder;
        return builder;
    }

    createModel():WikiChapter{
        const classicChapter = this.classicChapter?.createModel();
        const subChapter = this.subChapter?.createModel();
        const title = this.title?.createModel();
        const content = this.content?.createModel();
        const block = this.block?.createModel();

        return new WikiChapter({
            subChapter:subChapter,
            title:title, 
            classicChapter:classicChapter, 
            content:content, 
            block:block
        })
    }

}