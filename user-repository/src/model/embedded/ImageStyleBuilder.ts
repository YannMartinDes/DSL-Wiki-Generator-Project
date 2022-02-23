import { TextAlignment } from "../kernel/models/enum/text-align.enum";
import WikiTextStyle from "../kernel/models/style/wiki-text-style";
import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiImageStyle from "../kernel/models/elements/wiki-image";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import { Border } from "../kernel/models/enum/border.enum";
import {BlockStyleBuilder} from "./BlockStyleBuilder";

export class ImageStyleBuilder {

    style?:BlockStyleBuilder<ImageStyleBuilder>

    parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    editStyle(){
        if(!this.style){
            this.style=new BlockStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.style;
    }


    endImageStyle():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){
        const style = this.style?.createModel();

        return new WikiImageStyle({
            style:style
        });
    }

}
