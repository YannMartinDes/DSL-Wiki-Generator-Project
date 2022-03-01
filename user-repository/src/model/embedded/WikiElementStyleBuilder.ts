import WikiElement from "../kernel/models/elements/wiki-element";
import { TextBuilder } from "./TextBuilder";
import {ImageStyleBuilder} from "./ImageStyleBuilder";
import {ButtonStyleBuilder} from "./ButtonStyleBuilder";
import {TableStyleBuilder} from "./TableStyleBuilder";

export class WikiElementStyleBuilder{

    private text?:TextBuilder
    private image?:ImageStyleBuilder<WikiElementStyleBuilder>
    private button?:ButtonStyleBuilder
    private table?:TableStyleBuilder

    /**
     * Used to edit the text style of the element
     * @returns the text style builder
     */
    editTextStyle() {
        const builder = new TextBuilder(this);
        this.text = builder;
        return builder;
    }

    /**
     * Used to edit the image style of the element
     * @returns the image style builder
     */
    editImageStyle() {
        if(!this.image){
            this.image = new ImageStyleBuilder(this);
        }
        return this.image;
    }

    /**
     * Used to edit the button style of the element
     * @returns the button style builder
     */
    editButtonStyle() {
        if(!this.button){
            this.button = new ButtonStyleBuilder(this);
        }
        return this.button;
    }

    /**
     * Used to edit the table style of the element
     * @returns the table style builder
     */
    editTableStyle() {
        if(!this.table){
            this.table = new TableStyleBuilder(this);
        }
        return this.table;
    }

    createModel(){
        const text = this.text?.createModel();
        const image = this.image?.createModel();
        const button = this.button?.createModel();
        const table = this.table?.createModel();
        return new WikiElement({text:text, image:image, button:button, table:table});
    }
}
