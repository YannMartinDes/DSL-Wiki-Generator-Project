import { TextAlignment } from "../kernel/models/enum/text-align.enum";
import WikiTextStyle from "../kernel/models/style/wiki-text-style";

export class TextStyleBuilder<parentType> {

    private caps?:boolean;
    private textAlign?:TextAlignment;
    private bold?:boolean;
    private italic?:boolean;
    private underline?:boolean;
    private fontColor?:string;
    private fontSize?:string;
    private police?:string;

    parentBuilder:parentType;

    constructor (parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    capitalized(caps:boolean){
        this.caps = caps;
        return this;
    }

    putInBold(bold:boolean){
        this.bold = bold;
        return this;
    }

    italicize(italic:boolean){
        this.italic = italic;
        return this;
    }

    setPolice(police:string){
        this.police = police;
        return this;
    }

    setFontColor(color:string){
        this.fontColor = color;
        return this;
    }

    underlined(underline:boolean){
        this.underline = underline;
        return this;
    }

    setTextAlign(align:TextAlignment){
        this.textAlign = align;
        return this;
    }

    endTextStyle():parentType{
        return this.parentBuilder;
    }

    createModel(){
        return new WikiTextStyle({
            caps:this.caps, 
            text_alignment:this.textAlign, 
            bold:this.bold, 
            italic:this.italic,
            font_color:this.fontColor, 
            font_size:this.fontSize, 
            underline:this.underline, 
            police:this.police
        });
    }

}