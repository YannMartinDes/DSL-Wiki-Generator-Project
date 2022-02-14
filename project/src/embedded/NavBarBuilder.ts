import NavBar from "../kernel/models/navBar";
import ElementBuilder from "./ElementBuilder";
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

    createModel():NavBar {
        return new NavBar();
    }
}

export default NavBarBuilder