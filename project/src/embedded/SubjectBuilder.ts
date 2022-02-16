import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { ChapterBuilder } from "./ChapterBuilder";
import { ClassicChapterBuilder } from "./ClassicChapterBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { TOCBuilder } from "./TOCBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class SubjectBuilder{
    title?:TextStyleBuilder<ClassicChapterBuilder>
    content?:WikiElementStyleBuilder
    block?:BlockStyleBuilder
    chapter?:ChapterBuilder
    toc?:TOCBuilder

    editTitle(){
        const builder = new TextStyleBuilder(this);
        this.title = builder;
        return builder;
    }

    editBlock(){
        const builder = new BlockStyleBuilder();
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

    createModel(){
        //TODO
    }
}