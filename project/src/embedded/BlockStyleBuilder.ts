export class BlockStyleBuilder<parentType>{

    border?:string
    backgroundColor?:string
    alignment?:string
    padding?:string
    margin?:string

    parentBuilder:parentType

    constructor(parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    setBorder(border:string){
        this.border = border;
    }

    setBackgroundColor(color:string){
        this.backgroundColor = color;
    }

    setAlignment(align:string){
        this.alignment = align;
    }

    setPadding(padding:string){
        this.padding =padding;
    }

    setMargin(margin:string){
        this.margin =margin;
    }

    endBlockStyle():parentType{
        return this.parentBuilder;
    }

    createModel(){
        //TODO
    }
    
}