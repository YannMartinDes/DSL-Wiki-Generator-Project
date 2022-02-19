import WikiElement from "../kernel/models/elements/wiki-element";
import { TextBuilder } from "./TextBuilder";

export class WikiElementStyleBuilder{

    private text?:TextBuilder

    editText() {
        const builder = new TextBuilder(this);
        this.text = builder;
        return builder;
    }

    createModel(){
        const text = this.text?.createModel();
        return new WikiElement({text:text});
    }
}