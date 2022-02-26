import { TextAlignment } from "../kernel/models/enum/text-align.enum";
import WikiTextStyle from "../kernel/models/style/wiki-text-style";
import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiImageStyle from "../kernel/models/elements/wiki-image";
import WikiTableStyle from "../kernel/models/elements/wiki-table";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import { Border } from "../kernel/models/enum/border.enum";
import { Color } from "../kernel/models/enum/color.enum";
import { UnitySize } from "../kernel/models/enum/unity-font-size.enum";

export class TableStyleBuilder {


    //TODO mettre les bonnes méthodes et renommé pour être homogène ???
    private border?:Border
    private alignment?:AlignContent
    private size?:string
    private backgroundColor?:Color
    private color?:Color
    private parentBuilder:WikiElementStyleBuilder;

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

    editSize(value : number, type : UnitySize){
        this.size=value+type;
        return this;
    }

    editBackgroundColor(color:Color){
        this.backgroundColor=color;
        return this
    }

    editColor(color:Color){
        this.color=color;
        return this
    }

    endTableEdit():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){

        return new WikiTableStyle({
            border:this.border,
            alignment:this.alignment
        });
    }

}
