import Bibliography from "../kernel/models/chapters/bibliography";
import Section from "../kernel/models/section";
import SectionBuilder from "./SectionBuilder";
import SubjectBuilder from "./SubjectBuilder";

class BibliographyBuilder {

    private parentBuilder:SubjectBuilder;
    public id:string;
    private sections:SectionBuilder[];

    constructor(parentBuilder:SubjectBuilder, id:string) {
        this.id = id;
        this.parentBuilder = parentBuilder;
        this.sections = []
    }

    addSection(id:string) {
        const builder = new SectionBuilder(this,id);
        this.sections.push(builder);
        return builder;
    }

    parent(){
        return this.parentBuilder;
    }
    
    createModel():Bibliography {
        const sectionsList:Section[] = []
        for(const el of this.sections){
            sectionsList.push(el.createModel())
        }
        return new Bibliography(this.id,sectionsList);
    }

}
export default BibliographyBuilder