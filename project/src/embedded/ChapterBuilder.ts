import Chapter from "../kernel/models/chapters/chapter";
import Section from "../kernel/models/section";
import SectionBuilder from "./SectionBuilder";
import SubjectBuilder from "./SubjectBuilder";

class ChapterBuilder {

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
    
    createModel():Chapter {
        const sectionsList:Section[] = []
        for(const el of this.sections){
            sectionsList.push(el.createModel())
        }
        return new Chapter(this.id,sectionsList);
    }

}
export default ChapterBuilder