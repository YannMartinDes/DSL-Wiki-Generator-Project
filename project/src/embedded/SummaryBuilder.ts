import Summary from "../kernel/models/summary";
import ElementBuilder from "./wikiElementBuilder";
import SubjectBuilder from "./SubjectBuilder";

class SummaryBuilder {

    private rootBuilder:SubjectBuilder;
    public name:string;
    private elements:ElementBuilder[];

    constructor(rootBuilder:SubjectBuilder, name:string) {
        this.name = name;
        this.rootBuilder = rootBuilder;
        this.elements = []
    }
    
    createModel():Summary {
        return new Summary();
    }
}
export default SummaryBuilder