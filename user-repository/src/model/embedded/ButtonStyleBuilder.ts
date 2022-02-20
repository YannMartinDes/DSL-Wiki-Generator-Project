import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiButtonStyle from "../kernel/models/elements/wiki-button";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";

export class ButtonStyleBuilder {

    border?:string
    alignment?:AlignContent

    parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    editBorder(border:string){
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
