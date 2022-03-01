import WikiButtonStyle from "../kernel/models/elements/wiki-button";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import WikiBlockStyle from "../kernel/models/style/wiki-block-style";
import WikiTextStyle from "../kernel/models/style/wiki-text-style";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";

export class ButtonStyleBuilder {

    private block?:BlockStyleBuilder<ButtonStyleBuilder>
    private text?:TextStyleBuilder<ButtonStyleBuilder>

    parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    /**
     * Used to edit the style of the button's box
     * @returns the button box style builder
     */
    editContentBoxStyle() {
        const builder = new BlockStyleBuilder(this);
        this.block = builder;
        return builder;
    }

    /**
     * Used to edit the button's text
     * @returns the button's text style builder
     */
    editButtonTextStyle() {
        const builder = new TextStyleBuilder(this);
        this.text = builder;
        return builder;
    }

    /**
     * Used to stop the image editing and returning to the parent builder
     * @returns the parent builder
     */
    endButtonEdit():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){
        const block = this.block?.createModel();
        const text = this.text?.createModel();

        return new WikiButtonStyle({
            block:block,
            text:text
        });
    }

}
