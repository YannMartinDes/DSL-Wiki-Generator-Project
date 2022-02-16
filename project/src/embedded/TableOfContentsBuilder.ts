import TableOfContent from "../kernel/models/tableOfContent";
import SubjectBuilder from "./SubjectBuilder";
import WikiElementBuilder from "./wikiElementBuilder";
import { BUTTON, IMAGE, TABLE, TEXT } from "./Const";
import WikiElement from "../kernel/models/elements/wikiElement";

class TableOfContentsBuilder {
    
    private parentBuilder:SubjectBuilder;
    public id:string;
    private elements:WikiElementBuilder[];

    constructor(parentBuilder:SubjectBuilder, id:string) {
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

    createModel():TableOfContent {

        const elementsList:WikiElement[] = []
        for(const el of this.elements){
            elementsList.push(el.createModel())
        }
        return new TableOfContent(this.id,elementsList);
    }
}
export default TableOfContentsBuilder