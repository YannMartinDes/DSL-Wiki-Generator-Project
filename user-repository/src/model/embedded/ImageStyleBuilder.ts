import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiImageStyle from "../kernel/models/elements/wiki-image";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import { Border } from "../kernel/models/enum/border.enum";
import {BlockStyleBuilder} from "./BlockStyleBuilder";

export class ImageStyleBuilder {

    private blockStyle?:BlockStyleBuilder<ImageStyleBuilder>
    private parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    editStyle(){
        if(!this.blockStyle){
            this.blockStyle=new BlockStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.blockStyle;
    }


    endImageStyle():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){
        const style = this.blockStyle?.createModel();

        return new WikiImageStyle({
            style:style
        });
    }

}
