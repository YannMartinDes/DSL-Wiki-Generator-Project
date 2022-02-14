import TableOfContent from "../kernel/models/tableOfContent";
import ElementBuilder from "./ElementBuilder";
import SubjectBuilder from "./SubjectBuilder";

class TableOfContentsBuilder {
    
    private rootBuilder:SubjectBuilder;
    public name:string;
    private elements:ElementBuilder[]

    constructor(rootBuilder:SubjectBuilder, name:string) {
        this.name = name;
        this.rootBuilder = rootBuilder;
        this.elements = []
    }
    
    createModel():TableOfContent {
        return new TableOfContent();
    }

}

export default TableOfContentsBuilder