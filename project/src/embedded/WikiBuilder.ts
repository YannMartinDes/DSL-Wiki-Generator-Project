import Wiki from "../kernel/models/wiki";
import NavBarBuilder from "./NavBarBuilder";
import SubjectBuilder from "./SubjectBuilder";

class WikiBuilder {
    
    private name:string;
    private subjectBuilder:SubjectBuilder;
    private navBarBuilder:NavBarBuilder;

    constructor(name:string) {
        this.name = name;
        this.subjectBuilder = new SubjectBuilder(this, name);
        this.navBarBuilder = new NavBarBuilder(this, name);
    }

    createModel():Wiki {
        return new Wiki();
    }
}

export default WikiBuilder