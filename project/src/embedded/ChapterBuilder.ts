import { BlockStyleBuilder } from "./BlockStyleBuilder"
import { ClassicChapterBuilder } from "./ClassicChapterBuilder"
import { TextStyleBuilder } from "./TextStyleBuilder"
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder"

export class ChapterBuilder {

    classicChapter?:ClassicChapterBuilder
    subChapter?:ChapterBuilder
    title?:TextStyleBuilder<ChapterBuilder>
    content?:WikiElementStyleBuilder
    block?:BlockStyleBuilder

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
        const builder = new BlockStyleBuilder();
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

    createModel(){
        //TODO
    }

}