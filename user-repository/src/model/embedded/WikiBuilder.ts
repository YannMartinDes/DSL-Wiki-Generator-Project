import Wiki from "../kernel/models/wiki";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { SubjectBuilder } from "./SubjectBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import {NavBarBuilder} from "./NavBarBuilder";

export class WikiBuilder{
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<WikiBuilder>
    private subject?:SubjectBuilder
    private navBar?:NavBarBuilder
    private hover?:WikiBuilder
    private isHover:boolean

    constructor(isHover:boolean){
        this.isHover = isHover;
    }

    editHover(){
        if(this.isHover) return this;

        if(!this.hover){
            this.hover = new WikiBuilder(true);
        }
        return this.hover;
    }

    editBlock(){
        let builder = this.block;

        if(!builder){
            builder = new BlockStyleBuilder(this);
            this.block = builder;
        }
        return builder;
    }

    editSubject(){
        let builder = this.subject;

        if(!builder!){
            builder = new SubjectBuilder();
            this.subject = builder;
        }
        return builder;
    }

    editContent(){
        let builder = this.content;

        if(!builder){
            builder = new WikiElementStyleBuilder();
            this.content = builder;
        }
        return builder;
    }

    editNavBar(){
        if(!this.navBar){
            this.navBar = new NavBarBuilder();
        }
        return this.navBar;
    }


    createModel():Wiki{
        const content = this.content?.createModel();
        const block = this.block?.createModel();
        const subject = this.subject?.createModel();
        const navBar = this.navBar?.createModel();
        const hover = this.hover?.createModel();

        return new Wiki({content:content, block:block, subject:subject, navBar:navBar, hover:hover});
    }
}
