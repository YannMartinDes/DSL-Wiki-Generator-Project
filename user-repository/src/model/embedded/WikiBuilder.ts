import Wiki from "../kernel/models/wiki";
import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { SubjectBuilder } from "./SubjectBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import {NavBarBuilder} from "./NavBarBuilder";
import { DisplaySize } from "../kernel/models/display-size";

export class WikiBuilder{
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<WikiBuilder>
    private subject?:SubjectBuilder
    private navBar?:NavBarBuilder
    private hover?:WikiBuilder
    private isHover!:boolean
    private displaySize:DisplaySize<WikiBuilder>[]=[]
    private root!:WikiBuilder


    private constructor(isHover:boolean,root?:WikiBuilder){
        this.isHover=isHover
        if(root){
            this.root=root;
        }else{
            this.root=this
        }
     }
    static createWiki(){
        const rootBuilder = new WikiBuilder(false)
        return rootBuilder;
    }

    editHover(){
        if(this.isHover) return this;

        if(!this.hover){
            this.hover = new WikiBuilder(true);
        }
        return this.hover;
    }
    editDisplaySize({minWidth,minHeght,maxWidth,maxHeight}:
        {minWidth:number,minHeght:number,maxWidth:number,maxHeight:number}){
        const displaySize = new DisplaySize(new WikiBuilder(this.isHover,this.root))
        if(minHeght){
            displaySize.minHeight=minHeght
        }
        if(minWidth){
            displaySize.minWidth=minWidth
        }
        if(maxHeight){
            displaySize.maxHeight=maxHeight
        }
        if(maxWidth){
            displaySize.maxWidth=maxWidth
        }

        displaySize.minWidth
        this.root.displaySize.push(displaySize)

        return displaySize.element;
    }
    returnNormalDisplaySize(){
        return this.root;
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
