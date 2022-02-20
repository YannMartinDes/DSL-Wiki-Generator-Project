import { TextAlignment } from "../kernel/models/enum/text-align.enum";
import WikiTextStyle from "../kernel/models/style/wiki-text-style";
import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiImageStyle from "../kernel/models/elements/wiki-image";
import WikiTableStyle from "../kernel/models/elements/wiki-table";

export class TableStyleBuilder<parentType> {

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

        return new WikiTableStyle({
            border:this.border,
            alignment:this.alignment
        });
    }

}
