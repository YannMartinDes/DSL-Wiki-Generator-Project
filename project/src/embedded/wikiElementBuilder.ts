import Button from "../kernel/models/elements/button";
import Image from "../kernel/models/elements/image";
import Table from "../kernel/models/elements/table";
import Text from "../kernel/models/elements/text";
import { BUTTON, IMAGE, TABLE, TEXT } from "./Const";
import InfoBoxBuilder from "./InfoBoxBuilder";
import NavBarBuilder from "./NavBarBuilder";
import SectionBuilder from "./SectionBuilder";
import SummaryBuilder from "./SummaryBuilder";
import TableOfContentsBuilder from "./TableOfContentsBuilder";
class WikiElementBuilder {
    
    private rootBuilder:NavBarBuilder|SummaryBuilder|TableOfContentsBuilder|InfoBoxBuilder|SectionBuilder;
    public id:string;
    private linkable?:string;
    private kind:string;

    constructor(rootBuilder:NavBarBuilder|SummaryBuilder|TableOfContentsBuilder|InfoBoxBuilder|SectionBuilder, 
        id:string, 
        kind:string) {
        this.id = id;
        this.rootBuilder = rootBuilder;
        this.kind = kind;
    }

    root(){//To replace
        return this.rootBuilder;
    }

    linkTo(linkable:string){
        this.linkable = linkable;
        return this.rootBuilder;
    }
    
    createModel():(Text|Image|Table|Button) {

        //Singleton linkTo ? [Objet Element , "Section 1"], [...],...
        //["Section 1",Obj Section]

        if (this.kind == TEXT) {
            return new Text(this.id);
        }
        if (this.kind == IMAGE) {
            return new Image(this.id);
        }
        if (this.kind == TABLE) {
            return new Table(this.id);
        }
        if (this.kind == BUTTON) {
            return new Button(this.id);
        }
        console.error("UNDEFINED KIND")
        return new Text("UNDEFINED");
    }
}
export default WikiElementBuilder