import Subject from "../kernel/models/subject";
import ChapterBuilder from "./ChapterBuilder";
import InfoBoxBuilder from "./InfoBoxBuilder";
import SummaryBuilder from "./SummaryBuilder";
import TableOfContentsBuilder from "./TableOfContentsBuilder";
import WikiBuilder from "./WikiBuilder";

class SubjectBuilder {

    private rootBuilder:WikiBuilder;
    public name:string;
    private summary:SummaryBuilder;
    private tableOfContents:TableOfContentsBuilder;
    private infoBox:InfoBoxBuilder;
    private chapters:ChapterBuilder[];

    constructor(rootBuilder:WikiBuilder, name:string) {
        this.name = name;
        this.rootBuilder = rootBuilder;
        this.summary = new SummaryBuilder(this, name);
        this.tableOfContents = new TableOfContentsBuilder(this, name);
        this.infoBox = new InfoBoxBuilder(this, name);
        this.chapters = []
    }
    
    createModel():Subject {
        return new Subject();
    }
}

export default SubjectBuilder