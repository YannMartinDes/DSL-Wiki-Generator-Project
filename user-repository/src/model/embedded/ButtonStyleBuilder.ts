import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiButtonStyle from "../kernel/models/elements/wiki-button";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import { Border } from "../kernel/models/enum/border.enum";

export class ButtonStyleBuilder {

    border?:Border
    alignment?:AlignContent

    parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    editBorder(border:Border){
        this.border=border;
        return this;
    }

    editAlignement(alignment:AlignContent){
        this.alignment=alignment;
        return this;
    }


    endImageStyle():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){

        return new WikiButtonStyle({
            border:this.border,
            alignment:this.alignment
        });
    }

}
