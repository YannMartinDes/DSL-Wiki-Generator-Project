import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { ClassicChapterBuilder } from "./ClassicChapterBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class TOCBuilder{
    title?:TextStyleBuilder<ClassicChapterBuilder>
    content?:WikiElementStyleBuilder
    block?:BlockStyleBuilder
    numerated?:boolean


    editTitle(){
        const builder = new TextStyleBuilder(this);
        this.title = builder;
        return builder;
    }

    isNumerated(numerated:boolean){
        this.numerated = numerated;
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

    createModel(){
        //TODO
    }
}