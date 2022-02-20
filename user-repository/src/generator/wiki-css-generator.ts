
import WikiTextStyle from "../model/kernel/models/style/wiki-text-style";
import Wiki from "../model/kernel/models/wiki";
import WikiSubject from "../model/kernel/models/wiki-subject"
import createFile from "./utlis/file-utils";
import WikiElementStyle from "../model/kernel/models/elements/wiki-element";
import WikiText from "../model/kernel/models/elements/wiki-text";
import WikiBlockStyle from "../model/kernel/models/style/wiki-block-style";
import WikiTableOfContent from "../model/kernel/models/wiki-table-of-content";
import WikiSummary from "../model/kernel/models/wiki-summary";
import WikiChapter from "../model/kernel/models/chapters/wiki-chapter";
import WikiClassicChapter from "../model/kernel/models/chapters/wiki-classic-chapter";

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
        this.prefix.push(".wiki")

        if(wiki.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(wiki.blockStyle).join("")}}\n`)
        }
        if(wiki.contentStyle){
            this.wikiElementGen(wiki.contentStyle)
        }
        if(wiki.subject){
            this.subjectGen(wiki.subject);
        }
        //TODO ADD NAVBAR
        this.prefix.pop();
    }

    subjectGen(subject:WikiSubject){
        this.prefix.push(".subject")

        if(subject.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(subject.blockStyle).join("")}}\n`)
        }
        if(subject.titleStyle){
            this.titleGen(subject.titleStyle);
        }
        if(subject.contentStyle){
            this.wikiElementGen(subject.contentStyle)
        }
        if(subject.chapter){
            this.chapterGen(subject.chapter);
        }
        if(subject.tableOfContent){
            this.tableOfContentGen(subject.tableOfContent);
        }
        if(subject.summary){
            this.summaryGen(subject.summary);
        }
        //TODO infobox

        this.prefix.pop()
    }

    chapterGen(chapter:WikiChapter){
        this.prefix.push(".chapter")

        if(chapter.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(chapter.blockStyle).join("")}}\n`)
        }
        if(chapter.titleStyle){
            this.titleGen(chapter.titleStyle);
        }
        if(chapter.contentStyle){
            this.wikiElementGen(chapter.contentStyle);
        }
        if(chapter.classicChapter){
            this.classicChapterGen(chapter.classicChapter);
        }
        if(chapter.subChapter){
            this.subChapterGen(chapter.subChapter);
        }
        //Todo le reste des chapitres particulier
        this.prefix.pop();
    }

    subChapterGen(subChapter:WikiChapter){
        this.prefix.push(".subChapter")

        if(subChapter.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(subChapter.blockStyle).join("")}}\n`)
        }
        if(subChapter.titleStyle){
            this.titleGen(subChapter.titleStyle);
        }
        if(subChapter.contentStyle){
            this.wikiElementGen(subChapter.contentStyle);
        }
        if(subChapter.classicChapter){
            this.classicChapterGen(subChapter.classicChapter);
        }
        //Todo le reste des chapitres particulier
        this.prefix.pop();
    }

    classicChapterGen(classicChap:WikiClassicChapter){
        this.prefix.push(".classicChapter");

        if(classicChap.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(classicChap.blockStyle).join("")}}\n`)
        }
        if(classicChap.titleStyle){
            this.titleGen(classicChap.titleStyle);
        }
        if(classicChap.contentStyle){
            this.wikiElementGen(classicChap.contentStyle);
        }
        this.prefix.pop();
    }
    
    tableOfContentGen(toc:WikiTableOfContent){
        this.prefix.push(".tableOfContent");

        if(toc.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(toc.blockStyle).join("")}}\n`)
        }
        if(toc.titleStyle){
            this.titleGen(toc.titleStyle);
        }
        if(toc.contentStyle){
            this.wikiElementGen(toc.contentStyle)
        }
        this.prefix.pop();
    }

    summaryGen(summary:WikiSummary){
        this.prefix.push(".summary");

        if(summary.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(summary.blockStyle).join("")}}\n`)
        }
        if(summary.contentStyle){
            this.wikiElementGen(summary.contentStyle)
        }
        this.prefix.pop();
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

    textStyleGen(text:WikiTextStyle){
        let result:string[] = []

        if(text.bold){
            result.push(`\tfont-weight: ${text.bold};\n`) 
        }
        if(text.italic){
            result.push(`\tfont-style: ${text.italic};\n`) 
        }
        if(text.caps){
            result.push(`\ttext-transform: ${text.caps};\n`) 
        }
        if(text.font_color){
            result.push(`\tcolor: ${text.font_color};\n`)
        }
        if(text.font_size){
            result.push(`\tfont-size: ${text.font_size};\n`) 
        }
        if(text.underline){
            result.push(`\ttext-decoration: ${text.underline};\n`)
        }
        if(text.text_alignment){
            result.push(`\ttext-align: ${text.text_alignment};\n`)
        }
        if(text.police){
            result.push(`\tfont-family: ${text.police};\n`);
        }
        return result
    }

    blockStyleGen(block:WikiBlockStyle){
        //Add class ? 
        let result:string[] = []

        if(block.background){
            result.push(`\tbackground-color: ${block.background};\n`)
        }
        if(block.border){
            result.push(`\tborder: ${block.border};\n`)
        }
        if(block.margin){
            result.push(`\tmargin: ${block.margin};\n`)// TODO margin localisée avec multi constructeur
        }
        if(block.padding){
            result.push(`\tpadding: ${block.padding};\n`)// TODO padding localisé avec multi constructeur
        }
        if(block.alignment){
            result.push(`\talign-content: ${block.alignment};\n`)
        }

        return result;
    }

    titleGen(title:WikiTextStyle){
        this.prefix.push(".title");
        this.generate.push(`${this.prefix.join(" ")} {\n${this.textStyleGen(title).join("")}}\n`)
        this.prefix.pop();
    }

}