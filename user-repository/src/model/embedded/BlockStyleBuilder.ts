import { AlignContent } from "../kernel/models/enum/align-content.enum"
import { Border } from "../kernel/models/enum/border.enum"
import { Color } from "../kernel/models/enum/color.enum"
import { UnitySize } from "../kernel/models/enum/unity-font-size.enum"
import WikiBlockStyle from "../kernel/models/style/wiki-block-style"

export class BlockStyleBuilder<parentType>{

    private border?:string
    private backgroundColor?:string
    private alignment?:AlignContent
    private padding?:string
    private margin?:string

    private parentBuilder:parentType

    constructor(parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    setBorder(value : number, type : UnitySize ,color:Color, border:Border){
        let borderConstructed=value+type+" "+color+ " "+border
        this.border = borderConstructed;
        return this;
    }

    setBackgroundColor(color:Color | string){
        this.backgroundColor = color;
        return this;
    }

    setAlignment(align:AlignContent){
        this.alignment = align;
        return this;
    }

    setPadding(value : number, type : UnitySize){
        this.padding =value+ type;
        return this;
    }

    setPaddingSides(top:number, right:number, bottom:number, left:number, type:UnitySize){
        this.padding = top+type+" "+right+type+" "+bottom+type+" "+left+type;
        return this;
    }

    setMargin(value : number, type : UnitySize){
        this.margin =value + type;
        return this;
    }

    setMarginSides(top:number, right:number, bottom:number, left:number, type:UnitySize){
        this.margin = top+type+" "+right+type+" "+bottom+type+" "+left+type;
        return this;
    }

    endBlockEdit():parentType{
        return this.parentBuilder;
    }

    createModel(){
        return new WikiBlockStyle({
            margin:this.margin,
            padding:this.padding,
            border:this.border,
            background:this.backgroundColor, 
            alignment:this.alignment
        });
    }
    
}