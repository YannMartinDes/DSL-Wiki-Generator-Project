
import { WikiTitleStyle } from "../kernel/models/style/wiki-title-style";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";

export class TitleStyleBuilder<ParentType>{
    private text?:TextStyleBuilder<TitleStyleBuilder<ParentType>>
    private block?:BlockStyleBuilder<TitleStyleBuilder<ParentType>>
    private parentBuilder:ParentType

    constructor (parentBuilder:ParentType){
        this.parentBuilder = parentBuilder;
    }

    /**
     * Used to edit the style of the title box
     * @returns the title box builder
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
     * Used to edit the style of the title
     * @returns the title content builder
     */
    editContentStyle(){
        let builder = this.text;

        if(!builder){
            builder = new TextStyleBuilder(this);
            this.text = builder;
        }
        return builder;
    }

    /**
     * Used to return to the parent builder
     * @returns the parent builder
     */
    endTitleEdit(){
        return this.parentBuilder;
    }

    createModel(){
        return new WikiTitleStyle({
            wikiBlockStyle: this.block?.createModel(),
            wikiTextStyle: this.text?.createModel()
        });
    }
}
