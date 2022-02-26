import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiImageStyle from "../kernel/models/elements/wiki-image";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import { Border } from "../kernel/models/enum/border.enum";
import {BlockStyleBuilder} from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";

export class ImageStyleBuilder {

    private blockStyle?:BlockStyleBuilder<ImageStyleBuilder>
    private resumeStyle?:TextStyleBuilder<ImageStyleBuilder>
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
    editResumeStyle(){
        if(!this.resumeStyle){
            this.resumeStyle=new TextStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.resumeStyle;
    }


    endImageStyle():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){
        const style = this.blockStyle?.createModel();

        return new WikiImageStyle({
            style:style,
            resumeStyle:this.resumeStyle?.createModel()
        });
    }

}
