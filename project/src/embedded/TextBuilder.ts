import { TextStyleBuilder } from "./TextStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class TextBuilder{

    private boldText?:TextStyleBuilder<TextBuilder>;
    private italicText?:TextStyleBuilder<TextBuilder>;
    private normalText?:TextStyleBuilder<TextBuilder>;
    private linkText?:TextStyleBuilder<TextBuilder>;

    private parentBuilder:WikiElementStyleBuilder;

    constructor(parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }


    boldTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.boldText = builder;
        return builder;
    }

    italicTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.italicText = builder;
        return builder;
    }

    linkTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.linkText = builder;
        return builder;
    }

    textStyle(){
        const builder = new TextStyleBuilder(this);
        this.normalText = builder;
        return builder;
    }

    endTextEdit():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){
        //TODO
    }

}