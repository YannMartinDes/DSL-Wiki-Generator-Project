import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class ClassicChapterBuilder{

    private title?:TextStyleBuilder<ClassicChapterBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<ClassicChapterBuilder>


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

    createModel(){
        //TODO
    }
}