import { TextStyleBuilder } from "./TextStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class TextBuilder{

    boldText?:TextStyleBuilder<TextBuilder>;
    italicText?:TextStyleBuilder<TextBuilder>;
    normalText?:TextStyleBuilder<TextBuilder>;
    linkText?:TextStyleBuilder<TextBuilder>;

    parentBuilder:WikiElementStyleBuilder;

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