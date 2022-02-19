export class BlockStyleBuilder<parentType>{

    private border?:string
    private backgroundColor?:string
    private alignment?:string
    private padding?:string
    private margin?:string

    private parentBuilder:parentType

    constructor(parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    setBorder(border:string){
        this.border = border;
        return this;
    }

    setBackgroundColor(color:string){
        this.backgroundColor = color;
        return this;
    }

    setAlignment(align:string){
        this.alignment = align;
        return this;
    }

    setPadding(padding:string){
        this.padding =padding;
        return this;
    }

    setMargin(margin:string){
        this.margin =margin;
        return this;
    }

    endBlockEdit():parentType{
        return this.parentBuilder;
    }

    createModel(){
        //TODO
    }
    
}