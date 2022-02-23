import WikiButtonStyle from "../kernel/models/elements/wiki-button";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import WikiBlockStyle from "../kernel/models/style/wiki-block-style";
import WikiTextStyle from "../kernel/models/style/wiki-text-style";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";

export class ButtonStyleBuilder {

    private block?:BlockStyleBuilder<ButtonStyleBuilder>
    private text?:TextStyleBuilder<ButtonStyleBuilder>
    private display?:String

    parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    createBlock() {
        const builder = new BlockStyleBuilder(this);
        this.block = builder;
        return builder;
    }

    createText() {
        const builder = new TextStyleBuilder(this);
        this.text = builder;
        return builder;
    }

    editDisplay(display:string) {
        this.display=display;
        return this;
    }

    endButtonStyle():WikiElementStyleBuilder{
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
