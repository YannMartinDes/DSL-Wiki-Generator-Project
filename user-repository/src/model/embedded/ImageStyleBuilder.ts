import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiImageStyle from "../kernel/models/elements/wiki-image";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import { Border } from "../kernel/models/enum/border.enum";
import {BlockStyleBuilder} from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { UnitySize } from "../kernel/models/enum/unity-font-size.enum";

export class ImageStyleBuilder {

    private blockStyle?:BlockStyleBuilder<ImageStyleBuilder>
    private blockResumeStyle?:BlockStyleBuilder<ImageStyleBuilder>
    private blockImageStyle?:BlockStyleBuilder<ImageStyleBuilder>
    private resumeStyle?:TextStyleBuilder<ImageStyleBuilder>
    private parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    /**
     * Used to edit the style of the image's conatiner box
     * @returns the image box style builder
     */
    editContentBoxStyle(){
        if(!this.blockStyle){
            this.blockStyle=new BlockStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.blockStyle;
    }

    /**
     * Used to edit the text of the image's description
     * @returns the description text style builder
     */
    editAbstractTextStyle(){
        if(!this.resumeStyle){
            this.resumeStyle=new TextStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.resumeStyle;
    }

    editImageWidth(value:number,unit?: UnitySize){
        if(!this.blockImageStyle){
            this.blockImageStyle = new BlockStyleBuilder<ImageStyleBuilder>(this);
        }
        this.blockImageStyle.setWidth(value,unit)
        return this
    }

    editImageHeight(value:number,unit?: UnitySize){
        if(!this.blockImageStyle){
            this.blockImageStyle = new BlockStyleBuilder<ImageStyleBuilder>(this);
        }
        this.blockImageStyle.setHeight(value,unit);
        return this
    }

    /**
     * Used to edit the style of the image's box
     * @returns the image box style builder
     */
    editImageBox(){
        if(!this.blockImageStyle){
            this.blockImageStyle=new BlockStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.blockImageStyle;
    }

    /**
     * Used to edit the style of the resume box
     * @returns the image resume box style builder
     */
    editImageResumeBox(){
        if(!this.blockResumeStyle){
            this.blockResumeStyle=new BlockStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.blockResumeStyle;
    }


    /**
     * Used to stop the image editing and returning to the parent builder
     * @returns the parent builder
     */
    endImageEdit():WikiElementStyleBuilder{
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
