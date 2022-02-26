
import { WikiTitleStyle } from "../kernel/models/style/wiki-title-style";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";

export class TitleStyleBuilder<ParentType>{
    private text?:TextStyleBuilder<TitleStyleBuilder<ParentType>>
    private block?:BlockStyleBuilder<TitleStyleBuilder<ParentType>>
    parentBuilder:ParentType
    
    constructor (parentBuilder:ParentType){
        this.parentBuilder = parentBuilder;
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
        let builder = this.text;

        if(!builder){
            builder = new TextStyleBuilder(this);
            this.text = builder;
        }
        return builder;
    }

    endTitle(){
        return this.parentBuilder;
    }

    createModel(){
        return new WikiTitleStyle({
            wikiBlockStyle: this.block?.createModel(),
            wikiTextStyle: this.text?.createModel()
        });
    }
}