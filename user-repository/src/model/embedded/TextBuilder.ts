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
     * Permet de modifier le style pour le text en gras
     * @returns Le text builder pour les elements en gras
     */
    editBoldTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.boldText = builder;
        return builder;
    }

    /**
     * Permet de modifier le style pour le text italic
     * @returns Le text builder pour les elements italic
     */
    editItalicTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.italicText = builder;
        return builder;
    }

    /**
     * Permet de modifier le style pour le text des liens
     * @returns Le text builder pour les elements des liens
     */
    editLinkTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.linkText = builder;
        return builder;
    }

    /**
     * Permet de modifier le style pour le text normal
     * @returns Le text builder pour les elements normal
     */
    editTextStyle(){
        const builder = new TextStyleBuilder(this);
        this.normalText = builder;
        return builder;
    }

    /**
     * Permet d'arreter d'editer le text et repasser au builder precedent
     * @returns Le builder parent
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