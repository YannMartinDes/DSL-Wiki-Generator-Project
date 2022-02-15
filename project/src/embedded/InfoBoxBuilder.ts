import InfoBox from "../kernel/models/infoBox";
import ElementBuilder from "./wikiElementBuilder";
import SubjectBuilder from "./SubjectBuilder";

class InfoBoxBuilder {

    private rootBuilder:SubjectBuilder;
    public name:string;
    private elements:ElementBuilder[]

    constructor(rootBuilder:SubjectBuilder, name:string) {
        this.name = name;
        this.rootBuilder = rootBuilder;
        this.elements = []
    }
    
    createModel():InfoBox {
        return new InfoBox();
    }
}
export default InfoBoxBuilder