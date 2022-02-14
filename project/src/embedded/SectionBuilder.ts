import Section from "../kernel/models/section";
import ChapterBuilder from "./ChapterBuilder";
import ElementBuilder from "./ElementBuilder";

class SectionBuilder {
    
    private rootBuilder:ChapterBuilder;
    public name:string;
    private elements:ElementBuilder[];

    constructor(rootBuilder:ChapterBuilder, name:string) {
        this.name = name;
        this.rootBuilder = rootBuilder;
        this.elements = []
    }
    
    createModel():Section {
        return new Section();
    }
}
export default SectionBuilder