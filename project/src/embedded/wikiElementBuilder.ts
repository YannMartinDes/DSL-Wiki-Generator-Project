import Button from "../kernel/models/elements/button";
import Image from "../kernel/models/elements/image";
import Table from "../kernel/models/elements/table";
import Text from "../kernel/models/elements/text";
import Linkable from "../kernel/models/linkable";
import { BUTTON, IMAGE, TABLE, TEXT } from "./Const";
import InfoBoxBuilder from "./InfoBoxBuilder";
import NavBarBuilder from "./NavBarBuilder";
import SectionBuilder from "./SectionBuilder";
import SummaryBuilder from "./SummaryBuilder";
import TableOfContentsBuilder from "./TableOfContentsBuilder";
class WikiElementBuilder {
    
    private rootBuilder:NavBarBuilder|SummaryBuilder|TableOfContentsBuilder|InfoBoxBuilder|SectionBuilder;
    public name:string;
    private linkable?:string;
    private kind:string;

    constructor(rootBuilder:NavBarBuilder|SummaryBuilder|TableOfContentsBuilder|InfoBoxBuilder|SectionBuilder, 
        name:string, 
        kind:string) {
        this.name = name;
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
    
    createModel(linkableHM:Map<string,Linkable>):(Text|Image|Table|Button) {
        const link = linkableHM.get(this.linkable||"");

        if (this.kind == TEXT) {
            return new Text(link);
        }
        if (this.kind == IMAGE) {
            return new Image(link);
        }
        if (this.kind == TABLE) {
            return new Table(link);
        }
        if (this.kind == BUTTON) {
            return new Button(link);
        }
        console.error("UNDEFINED KIND")
        return new Text();
    }
}
export default WikiElementBuilder