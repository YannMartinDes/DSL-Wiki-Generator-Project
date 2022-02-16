import Wiki from "../kernel/models/wiki";
import NavBarBuilder from "./NavBarBuilder";
import SubjectBuilder from "./SubjectBuilder";

class WikiBuilder {
    
    private name:string;
    private subjects:SubjectBuilder[];
    private navBars:NavBarBuilder[];

    constructor(name:string) {
        this.name = name;
        this.subjects = [];
        this.navBars = [];
    }

    addSubject(id:string){
        const builder = new SubjectBuilder(this,id);
        this.subjects.push(builder);
        return builder;
    }

    addNavBar(id:string){
        const builder = new NavBarBuilder(this,id);
        this.navBars.push(builder);
        return builder;
    }

    createModel():Wiki {

        const subjectList = []
        for(const subject of this.subjects){
            subjectList.push(subject.createModel());
        }

        const navBarsList = []
        for(const navBar of this.navBars){
            navBarsList.push(navBar.createModel());
        }

        return new Wiki(this.name,subjectList,navBarsList);
    }
}

export default WikiBuilder