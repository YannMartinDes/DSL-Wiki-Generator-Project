import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiButtonStyle from "../kernel/models/elements/wiki-button";

export class ButtonStyleBuilder<parentType> {

    border?:string
    alignment?:AlignContent

    parentBuilder:parentType;

    constructor (parentBuilder:parentType){
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


    endImageStyle():parentType{
        return this.parentBuilder;
    }

    createModel(){

        return new WikiButtonStyle({
            border:this.border,
            alignment:this.alignment
        });
    }

}
