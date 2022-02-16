import RelatedSubject from "../kernel/models/chapters/relatedSubject";
import Section from "../kernel/models/section";
import SectionBuilder from "./SectionBuilder";
import SubjectBuilder from "./SubjectBuilder";

class RelatedSubjectBuilder {

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
    
    createModel():RelatedSubject {
        const sectionsList:Section[] = []
        for(const el of this.sections){
            sectionsList.push(el.createModel())
        }
        return new RelatedSubject(this.id,sectionsList);
    }

}
export default RelatedSubjectBuilder