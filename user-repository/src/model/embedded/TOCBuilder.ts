import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { ClassicChapterBuilder } from "./ClassicChapterBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class TOCBuilder{
    private title?:TextStyleBuilder<TOCBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<TOCBuilder>
    private numerated?:boolean


    editTitle(){
        const builder = new TextStyleBuilder(this);
        this.title = builder;
        return builder;
    }

    isNumerated(numerated:boolean){
        this.numerated = numerated;
        return this;
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