import TableOfContent from "../kernel/models/tableOfContent";
import SubjectBuilder from "./SubjectBuilder";
import WikiElementBuilder from "./wikiElementBuilder";
import { BUTTON, IMAGE, TABLE, TEXT } from "./Const";
import Linkable from "../kernel/models/linkable";
import WikiElement from "../kernel/models/elements/wikiElement";

class TableOfContentsBuilder {
    

    private rootBuilder:SubjectBuilder;
    public name:string;
    private elements:WikiElementBuilder[];

    constructor(rootBuilder:SubjectBuilder, name:string) {
        this.name = name;
        this.rootBuilder = rootBuilder;
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

    root(){
        return this.rootBuilder;
    }

    createModel(linkableHM:Map<string,Linkable>):TableOfContent {

        const elementsList:WikiElement[] = []
        for(const el of this.elements){
            elementsList.push(el.createModel(linkableHM))
        }
        return new TableOfContent(elementsList);
    }
}
export default TableOfContentsBuilder