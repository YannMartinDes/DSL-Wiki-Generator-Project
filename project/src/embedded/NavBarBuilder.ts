import WikiElement from "../kernel/models/elements/wikiElement";
import Linkable from "../kernel/models/linkable";
import NavBar from "../kernel/models/navBar";
import { BUTTON, IMAGE, TABLE, TEXT } from "./Const";
import WikiBuilder from "./WikiBuilder";
import WikiElementBuilder from "./wikiElementBuilder";

class NavBarBuilder {

    private rootBuilder:WikiBuilder;
    public name:string;
    private elements:WikiElementBuilder[];

    constructor(rootBuilder:WikiBuilder, name:string) {
        this.rootBuilder = rootBuilder;
        this.name = name;
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

    createModel(linkableHM:Map<string,Linkable>):NavBar {

        const elementsList:WikiElement[] = []
        for(const el of this.elements){
            elementsList.push(el.createModel(linkableHM))
        }
        return new NavBar(elementsList);
    }
}

export default NavBarBuilder