import { TextBuilder } from "./TextBuilder";

export class WikiElementStyleBuilder{

    text?:TextBuilder

    editText() {
        const builder = new TextBuilder(this);
        this.text = builder;
        return builder;
    }

    createModel(){
        //TODO
    }

}