import Chapter from "../kernel/models/chapters/chapter";
import SectionBuilder from "./SectionBuilder";
import SubjectBuilder from "./SubjectBuilder";

class ChapterBuilder {

    private rootBuilder:SubjectBuilder;
    public name:string;
    private sections:SectionBuilder[];

    constructor(rootBuilder:SubjectBuilder, name:string) {
        this.name = name;
        this.rootBuilder = rootBuilder;
        this.sections = []
    }
    
    createModel():Chapter {
        return new Chapter();
    }

}
export default ChapterBuilder