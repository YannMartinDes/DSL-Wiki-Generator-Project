import References from "../kernel/models/chapters/references";
import Section from "../kernel/models/section";
import SectionBuilder from "./SectionBuilder";
import SubjectBuilder from "./SubjectBuilder";

class ReferenceBuilder {

    private rootBuilder:SubjectBuilder;
    public id:string;
    private sections:SectionBuilder[];

    constructor(rootBuilder:SubjectBuilder, id:string) {
        this.id = id;
        this.rootBuilder = rootBuilder;
        this.sections = []
    }

    addSection(id:string) {
        const builder = new SectionBuilder(this,id);
        this.sections.push(builder);
        return builder;
    }

    root(){
        return this.rootBuilder;
    }
    
    createModel():References {
        const sectionsList:Section[] = []
        for(const el of this.sections){
            sectionsList.push(el.createModel())
        }
        return new References(this.id,sectionsList);
    }

}
export default ReferenceBuilder