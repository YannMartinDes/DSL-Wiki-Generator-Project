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

     /**
     * Permet d'editer le style de la box
     * @returns Le builder de la box
     */
    editContentBoxStyle(){
        if(!this.blockStyle){
            this.blockStyle=new BlockStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.blockStyle;
    }

    /**
     * Permet d'editer le text de description de l'image
     * @returns Le builder du text de description
     */
    editAbstractTextStyle(){
        if(!this.resumeStyle){
            this.resumeStyle=new TextStyleBuilder<ImageStyleBuilder>(this);
        }
        return this.resumeStyle;
    }


    /**
     * Permet de repasser au builder precedent
     * @returns Le builder parent
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
