import InfoBoxBuilder from "./InfoBoxBuilder";
import NavBarBuilder from "./NavBarBuilder";
import SectionBuilder from "./SectionBuilder";
import SummaryBuilder from "./SummaryBuilder";
import TableOfContentsBuilder from "./TableOfContentsBuilder";

const TEXT = "text"
const IMAGE = "image"
const TABLE = "table"
const BUTTON = "button"

class ElementBuilder {
    
    private rootBuilder:NavBarBuilder|SummaryBuilder|TableOfContentsBuilder|InfoBoxBuilder|SectionBuilder;
    public name:string;
    private linkable:string;

    constructor(rootBuilder:NavBarBuilder|SummaryBuilder|TableOfContentsBuilder|InfoBoxBuilder|SectionBuilder, name:string, linkable:string) {
        this.name = name;
        this.rootBuilder = rootBuilder;
        this.linkable = linkable;
    }
    
    createModel():Element {
        return new Element();
    }
}
export default ElementBuilder