import Subject from "../kernel/models/subject";
import BibliographyBuilder from "./BibliographyBuilder";
import ChapterBuilder from "./ChapterBuilder";
import GalleryBuilder from "./GalleryBuilder";
import InfoBoxBuilder from "./InfoBoxBuilder";
import ReferenceBuilder from "./ReferenceBuilder";
import RelatedSubjectBuilder from "./RelatedSubjectBuilder";
import SummaryBuilder from "./SummaryBuilder";
import TableOfContentsBuilder from "./TableOfContentsBuilder";
import WikiBuilder from "./WikiBuilder";

class SubjectBuilder {

    private rootBuilder:WikiBuilder;
    public id:string;
    private summaries:SummaryBuilder[];
    private tableOfContents:TableOfContentsBuilder[];
    private infoBoxes:InfoBoxBuilder[];
    private chapters:ChapterBuilder[];
    private galleries:GalleryBuilder[];
    private relatedSubjects:RelatedSubjectBuilder[];
    private references:ReferenceBuilder[];
    private bibliographies:BibliographyBuilder[];


    constructor(rootBuilder:WikiBuilder, id:string) {
        this.id = id;
        this.rootBuilder = rootBuilder;
        this.chapters = []

        //Remove List if limited to one per subject...
        this.galleries =[]
        this.relatedSubjects = []
        this.references = []
        this.bibliographies = []
        this.summaries = []
        this.tableOfContents = []
        this.infoBoxes = []
    }

    addSummary(id:string){
        const builder = new SummaryBuilder(this,id);
        this.summaries.push(builder);
        return builder;
    }

    addTableOfContent(id:string){
        const builder = new TableOfContentsBuilder(this,id);
        this.tableOfContents.push(builder);
        return builder;
    }

    addInfoBox(id:string){
        const builder = new InfoBoxBuilder(this,id);
        this.infoBoxes.push(builder);
        return builder;
    }

    addChapter(id:string){
        const builder = new ChapterBuilder(this,id);
        this.chapters.push(builder);
        return builder;
    }

    addBibliography(id:string){
        const builder = new BibliographyBuilder(this,id);
        this.bibliographies.push(builder);
        return builder;
    }

    addReference(id:string){
        const builder = new ReferenceBuilder(this,id);
        this.references.push(builder);
        return builder;
    }

    addRelatedSubject(id:string){
        const builder = new RelatedSubjectBuilder(this,id);
        this.relatedSubjects.push(builder);
        return builder;
    }

    addGallery(id:string){
        const builder = new GalleryBuilder(this,id);
        this.galleries.push(builder);
        return builder;
    }
    
    root(){
        return this.rootBuilder;
    }

    createModel():Subject {

        const summaryList = []
        for(const summary of this.summaries){
            summaryList.push(summary.createModel())
        }

        const tableOfContentList = []
        for(const toc of this.tableOfContents){
            tableOfContentList.push(toc.createModel())
        }

        const infoBoxList = []
        for(const ib of this.infoBoxes){
            infoBoxList.push(ib.createModel())
        }

        const chapterList = []
        for(const chapter of this.chapters){
            chapterList.push(chapter.createModel())
        }

        const galleriesList = []
        for(const gallery of this.galleries){
            galleriesList.push(gallery.createModel())
        }

        const referencesList = []
        for(const reference of this.references){
            referencesList.push(reference.createModel())
        }

        const relatedSubjectList = []
        for(const rs of this.relatedSubjects){
            relatedSubjectList.push(rs.createModel())
        }

        const bibliographiesList = []
        for(const bibliography of this.bibliographies){
            bibliographiesList.push(bibliography.createModel())
        }

        return new Subject(this.id,summaryList,tableOfContentList,infoBoxList,
            chapterList,referencesList,bibliographiesList,relatedSubjectList,galleriesList);
    }
}

export default SubjectBuilder