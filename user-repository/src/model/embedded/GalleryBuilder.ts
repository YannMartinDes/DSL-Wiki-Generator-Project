import { BlockStyleBuilder } from "./BlockStyleBuilder";
import { TextStyleBuilder } from "./TextStyleBuilder";
import { WikiElementStyleBuilder } from "./WikiElementStyleBuilder";
import WikiGallery from "../kernel/models/chapters/wiki-gallery";
import { TitleStyleBuilder } from "./TitleStyleBuilder";

export class GalleryBuilder{

    private title?:TitleStyleBuilder<GalleryBuilder>
    private content?:WikiElementStyleBuilder
    private block?:BlockStyleBuilder<GalleryBuilder>


    editTitleStyle(){
        let builder = this.title;

        if(!builder){
            builder = new TitleStyleBuilder(this);
            this.title = builder;
        }
        return builder;
    }

    editContentBoxStyle(){
        let builder = this.block;

        if(!builder){
            builder = new BlockStyleBuilder(this);
            this.block = builder;
        }
        return builder;
    }

    editContentStyle(){
        let builder = this.content;

        if(!builder){
            builder = new WikiElementStyleBuilder();
            this.content = builder;
        }
        return builder;
    }

    createModel(){
        const title = this.title?.createModel();
        const content = this.content?.createModel();
        const block = this.block?.createModel();

        return new WikiGallery({title:title,content:content,block:block});
    }
}
