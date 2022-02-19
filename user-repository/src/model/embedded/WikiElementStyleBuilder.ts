import { TextBuilder } from "./TextBuilder";

export class WikiElementStyleBuilder{

    private text?:TextBuilder

    editText() {
        const builder = new TextBuilder(this);
        this.text = builder;
        return builder;
    }

    createModel(){
        //TODO
    }

}