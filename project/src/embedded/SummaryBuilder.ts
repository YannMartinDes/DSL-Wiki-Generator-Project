import Summary from "../kernel/models/summary";
import SubjectBuilder from "./SubjectBuilder";
import { BUTTON, IMAGE, TABLE, TEXT } from "./Const";
import WikiElementBuilder from "./wikiElementBuilder";
import WikiElement from "../kernel/models/elements/wikiElement";

class SummaryBuilder {

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

    createModel():Summary {

        const elementsList:WikiElement[] = []
        for(const el of this.elements){
            elementsList.push(el.createModel())
        }
        return new Summary(this.id,elementsList);
    }
}
export default SummaryBuilder