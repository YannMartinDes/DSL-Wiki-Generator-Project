import WikiText from "../kernel/models/elements/wiki-text";
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

    /**
     * Used to modify the style of the bold part of the text
     * @returns the bold text style builder
     */
    editBoldTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.boldText = builder;
        return builder;
    }

    /**
     * Used to modify the style of the italic part of the text
     * @returns the italic text style builder
     */
    editItalicTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.italicText = builder;
        return builder;
    }

    /**
     * Used to modify the style of the link part of the text
     * @returns the link text style builder
     */
    editLinkTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.linkText = builder;
        return builder;
    }

    /**
     * Used to modify the style of the basic part of the text
     * @returns the text style builder
     */
    editTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.normalText = builder;
        return builder;
    }

    /**
     * Used to stop editing the text and returning to the parent builder
     * @returns the parent builder
     */
    endTextEdit():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){
        const normalText = this.normalText?.createModel();
        const italicText = this.italicText?.createModel();
        const boldText = this.boldText?.createModel();
        const linkText = this.linkText?.createModel();

        return new WikiText({
            basic:normalText,
            bold:boldText,
            italic:italicText,
            link:linkText
        })
    }

}
