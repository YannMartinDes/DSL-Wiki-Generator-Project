import Bibliography from "./chapters/bibliography";
import Chapter from "./chapters/chapter";
import Gallery from "./chapters/gallery";
import References from "./chapters/references";
import RelatedSubject from "./chapters/relatedSubject";
import InfoBox from "./infoBox";
import Linkable from "./linkable";
import Summary from "./summary";
import TableOfContent from "./tableOfContent";

export default class Subject extends Linkable{

    summary:Summary[]
    tableOfContent:TableOfContent[]
    infoBox:InfoBox[]
    chapters:Chapter[]
    references:References[]
    bibliographies:Bibliography[]
    relatedSubjects:RelatedSubject[]
    galleries:Gallery[]

    constructor(id:string,
        summary:Summary[],
        tableOfContent:TableOfContent[],
        infoBox:InfoBox[],
        chapters:Chapter[],
        references:References[],
        bibliographies:Bibliography[],
        relatedSubjects:RelatedSubject[],
        galleries:Gallery[]){
            super(id);
        this.summary = summary;
        this.tableOfContent = tableOfContent;
        this.infoBox = infoBox;
        this.chapters = chapters;
        this.references = references;
        this.bibliographies = bibliographies;
        this.relatedSubjects = relatedSubjects;
        this.galleries = galleries;
    }
}