import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { SubjectBuilder } from "./SubjectBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class WikiBuilder{
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<WikiBuilder>
    private data?:any
    private subject?:SubjectBuilder

    editBlock(){
        const builder = new BlockStyleBuilder(this);
        this.block = builder;
        return builder;
    }

    editSubject(){
        const builder = new SubjectBuilder();
        this.subject = builder;
        return builder;
    }

    editContent(){
        const builder = new WikiElementStyleBuilder();
        this.content = builder;
        return builder;
    }

    createModel(){
        //TODO
    }
}