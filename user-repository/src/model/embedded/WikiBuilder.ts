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

    /**
     * Used to edit the style of the wiki on hover
     * @returns the on hover wiki builder
     */
    editOnHoverStyle(){
        if(this.isHover) return this;

        if(!this.hover){
            this.hover = new WikiBuilder(true);
        }
        return this.hover;
    }

    /**
     * Used to design the wiki differently for different screen size
     * @param param0 the screen size condition to use this style
     * @returns the wiki builder
     */
    editAlternativeDisplayStyle({minWidth,minHeght,maxWidth,maxHeight}:
        {minWidth?:number,minHeght?:number,maxWidth?:number,maxHeight?:number}){
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

    /**
     * Used to modify the default style of the wiki (without screen size)
     * @returns the basic wiki builder
     */
    returnToNormalDisplayStyle(){
        return this.root;
    }

    /**
     * Used to edit the wiki box style
     * @returns the box style builder
     */
    editContentBoxStyle(){
        let builder = this.block;

        if(!builder){
            builder = new BlockStyleBuilder(this);
            this.block = builder;
        }
        return builder;
    }

    /**
     * Used to edit the style of the subject
     * @returns the subject builder
     */
    editSubjectStyle(){
        let builder = this.subject;

        if(!builder!){
            builder = new SubjectBuilder();
            this.subject = builder;
        }
        return builder;
    }

    /**
     * Used to add style to all of the wiki content
     * @returns the element style builder
     */
    editContentStyle(){
        let builder = this.content;

        if(!builder){
            builder = new WikiElementStyleBuilder();
            this.content = builder;
        }
        return builder;
    }

    /**
     * Used to edit the style of the nav bar
     * @returns the subject nav bar
     */
    editNavBarStyle(){
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
        const displaySize = this.displaySize.map((elt)=>{
            const elementSized = new DisplaySize(elt.element.createModel())
            elementSized.maxHeight=elt.maxHeight
            elementSized.maxWidth=elt.maxWidth
            elementSized.minHeight=elt.minHeight
            elementSized.minWidth=elt.minWidth
            return elementSized
        })
        return new Wiki({content:content, block:block, subject:subject, navBar:navBar, hover:hover,displaySize:displaySize});
    }
}
