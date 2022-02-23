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

    editBlock() {
        const builder = new BlockStyleBuilder(this);
        this.block = builder;
        return builder;
    }

    editText() {
        const builder = new TextStyleBuilder(this);
        this.text = builder;
        return builder;
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
