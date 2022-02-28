import WikiElement from "../kernel/models/elements/wiki-element";
import { TextBuilder } from "./TextBuilder";
import {ImageStyleBuilder} from "./ImageStyleBuilder";
import {ButtonStyleBuilder} from "./ButtonStyleBuilder";
import {TableStyleBuilder} from "./TableStyleBuilder";

export class WikiElementStyleBuilder{

    private text?:TextBuilder
    private image?:ImageStyleBuilder
    private button?:ButtonStyleBuilder
    private table?:TableStyleBuilder

    /**
     * Permet d'editer le style des textes de l'element
     * @returns Le builder qui permet d'editer le style des text
     */
    editTextStyle() {
        const builder = new TextBuilder(this);
        this.text = builder;
        return builder;
    }

    /**
     * Permet d'editer le style des images de l'element
     * @returns Le builder qui permet d'editer le style des images
     */
    editImageStyle() {
        if(!this.image){
            this.image = new ImageStyleBuilder(this);
        }
        return this.image;
    }

    /**
     * Permet d'editer le style des bouton de l'element
     * @returns Le builder des bouton
     */
    editButtonStyle() {
        if(!this.button){
            this.button = new ButtonStyleBuilder(this);
        }
        return this.button;
    }

    /**
     * Permet d'editer le style des tables de l'element
     * @returns Le builder des table
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
