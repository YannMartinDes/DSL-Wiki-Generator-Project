
import WikiTextStyle from "../model/kernel/models/style/wiki-text-style";
import Wiki from "../model/kernel/models/wiki";
import WikiSubject from "../model/kernel/models/wiki-subject"
import createFile from "./utlis/file-utils";
import WikiElementStyle from "../model/kernel/models/elements/wiki-element";
import WikiText from "../model/kernel/models/elements/wiki-text";
import WikiBlockStyle from "../model/kernel/models/style/wiki-block-style";

export class WikiCssGenerator{
    generate:string[]=[]
    tab = 0;
    prefix:string[] = []


    generateCss(wiki:Wiki){
        this.wikiGen(wiki)
        return this.generate.join("")
    }

    generateCssFile(wiki:Wiki){
        this.wikiGen(wiki)
        createFile("../wiki-react/src/generate.css",this.generate.join(""))
    }

    wikiGen(wiki:Wiki){
        if(wiki.contentStyle){
            this.wikiElementGen(wiki.contentStyle)
        }
        if(wiki.subject){

        }
    }

    subjectGen(subject:WikiSubject){
        this.prefix.push(".subject")

        if(subject.contentStyle){
            this.wikiElementGen(subject.contentStyle)
        }
        if(subject.blockStyle){

        }
        if(subject.chapter){
            
        }


        this.prefix.pop()
    }


    textStyleGen(text:WikiTextStyle){
        let result:string[] = []

        if(text.bold){
            result.push("\tfont-weight: bold;\n") // Bold seulement ou semi bold ect ??
        }
        if(text.italic){
            result.push("\tfont-style: italic;\n") //Idem ? 
        }
        if(text.caps){
            result.push("\ttext-transform: uppercase;\n") //Trois mode plutot qu'un en réalité
        }
        if(text.font_color){
            result.push(`\tcolor: ${text.font_color};\n`)// Enum de color ? 
        }
        if(text.font_size){
            result.push(`\tfont-size: ${text.font_size};\n`) //TODO fixer l'unité avec un complément pour l'unité
        }
        if(text.underline){
            result.push(`\ttext-decoration: underline;\n`) //TODO verif que l'on veux pas permetre plus d'attribue comme dotted, une color ou autre
        }
        if(text.text_alignment){
            result.push(`\ttext-align: start;\n`)//TODO DIFF VALUE
        }
        return result
    }

    wikiElementGen(element:WikiElementStyle){
        if(element.text){
            this.textGen(element.text)
        }
    }

    textGen(text:WikiText){
        this.prefix.push(".text")

        if(text.basic){
            const basicTextStyle = this.textStyleGen(text.basic)
            if(basicTextStyle.length>0){
                this.generate.push(`${this.prefix.join(" ")} {\n${basicTextStyle.join("")}}\n`)
            }
        }
        if(text.bold){
            const boldTextStyle = this.textStyleGen(text.bold)
            if(boldTextStyle.length>0){
                this.generate.push(`${this.prefix.join(" ")} .bold{\n${boldTextStyle.join("")}}\n`)
            }
        }
        if(text.italic){
            const italicTextStyle = this.textStyleGen(text.italic)
            if(italicTextStyle.length>0){
                this.generate.push(`${this.prefix.join(" ")} .italic{\n${italicTextStyle.join("")}}\n`)
            }
        }
        if(text.link){
            const linkTextStyle = this.textStyleGen(text.link)
            if(linkTextStyle.length>0){
                this.generate.push(`${this.prefix.join(" ")} a {\n${linkTextStyle.join("")}}\n`)
            }
        }
        this.prefix.pop()
    }

    blockStyleGen(text:WikiBlockStyle){

    }

}