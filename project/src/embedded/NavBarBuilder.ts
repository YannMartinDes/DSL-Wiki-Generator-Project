import WikiElement from "../kernel/models/elements/wikiElement";
import Linkable from "../kernel/models/linkable";
import NavBar from "../kernel/models/navBar";
import { BUTTON, IMAGE, TABLE, TEXT } from "./Const";
import ElementBuilder from "./wikiElementBuilder";
import WikiBuilder from "./WikiBuilder";

class NavBarBuilder {

    private rootBuilder:WikiBuilder;
    public name:string;
    private elements:ElementBuilder[];

    constructor(rootBuilder:WikiBuilder, name:string) {
        this.rootBuilder = rootBuilder;
        this.name = name;
        this.elements = []
    }

    addText(id:string){
        const builder = new ElementBuilder(this,id,TEXT);
        this.elements.push(builder);
        return builder;
    }

    addTable(id:string){
        const builder = new ElementBuilder(this,id,TABLE);
        this.elements.push(builder);
        return builder;
    }

    addImage(id:string){
        const builder = new ElementBuilder(this,id,IMAGE);
        this.elements.push(builder);
        return builder;
    }

    addButton(id:string){
        const builder = new ElementBuilder(this,id,BUTTON);
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