import WikiElement from "../kernel/models/elements/wikiElement";
import Section from "../kernel/models/section";
import BibliographyBuilder from "./BibliographyBuilder";
import ChapterBuilder from "./ChapterBuilder";
import { BUTTON, IMAGE, TABLE, TEXT } from "./Const";
import GalleryBuilder from "./GalleryBuilder";
import ReferenceBuilder from "./ReferenceBuilder";
import RelatedSubjectBuilder from "./RelatedSubjectBuilder";
import WikiElementBuilder from "./wikiElementBuilder";

class SectionBuilder {
    
    private parentBuilder:ChapterBuilder|GalleryBuilder|RelatedSubjectBuilder|ReferenceBuilder|BibliographyBuilder;
    public id:string;
    private elements:WikiElementBuilder[];

    constructor(parentBuilder:ChapterBuilder|GalleryBuilder|RelatedSubjectBuilder|ReferenceBuilder|BibliographyBuilder, id:string) {
        this.id = id;
        this.parentBuilder = parentBuilder;
        this.elements = []
    }
    
    addText(id:string){
        const builder = new WikiElementBuilder(this,id,TEXT);
        this.elements.push(builder);
        return builder;
    }

    addTable(id:string){
        const builder = new WikiElementBuilder(this,id,TABLE);
        this.elements.push(builder);
        return builder;
    }

    addImage(id:string){
        const builder = new WikiElementBuilder(this,id,IMAGE);
        this.elements.push(builder);
        return builder;
    }

    addButton(id:string){
        const builder = new WikiElementBuilder(this,id,BUTTON);
        this.elements.push(builder);
        return builder;
    }

    parent(){
        return this.parentBuilder;
    }
    
    createModel():Section {
        const elementsList:WikiElement[] = []
        for(const el of this.elements){
            elementsList.push(el.createModel())
        }

        //add to Singleton HM
        return new Section(this.id,elementsList);
    }
}
export default SectionBuilder