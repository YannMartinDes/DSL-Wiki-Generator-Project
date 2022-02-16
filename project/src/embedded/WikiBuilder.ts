import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { SubjectBuilder } from "./SubjectBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";

export class WikiBuilder{
    content?:WikiElementStyleBuilder
    block?:BlockStyleBuilder
    data?:any
    subject?:SubjectBuilder

    editBlock(){
        const builder = new BlockStyleBuilder();
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