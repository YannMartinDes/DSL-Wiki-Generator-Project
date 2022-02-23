
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
import WikiBibliography from "../model/kernel/models/chapters/wiki-bibliography";
import WikiRelatedSubject from "../model/kernel/models/wiki-related-subject";
import WikiGallery from "../model/kernel/models/chapters/wiki-gallery";
import WikiInfoBox from "../model/kernel/models/wiki-info-box";
import WikiNavBar from "../model/kernel/models/wiki-nav-bar";
import WikiImageStyle from "../model/kernel/models/elements/wiki-image";
import WikiButtonStyle from "../model/kernel/models/elements/wiki-button";
import WikiTableStyle from "../model/kernel/models/elements/wiki-table";
import WikiReferences from "../model/kernel/models/wiki-references";

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
        if (wiki.navBar) {
            this.navBarGen(wiki.navBar);
        }

        if((!wiki.blockStyle) && (!wiki.contentStyle) && (!wiki.subject) && (!wiki.navBar)){
            console.warn('You created a wiki without any content')
        }

        this.prefix.pop();
    }

    navBarGen(navBar:WikiNavBar){
        this.prefix.push(".navBar")

        if(navBar.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(navBar.blockStyle).join("")}}\n`)
        }
        if(navBar.contentStyle){
            this.wikiElementGen(navBar.contentStyle)
        }

        if((!navBar.blockStyle) && (!navBar.contentStyle)){
            console.warn('You created a nav bar without any content')
        }

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
        if (subject.infoBox) {
            this.infoBoxGen(subject.infoBox);
        }
        if(subject.summary){
            this.summaryGen(subject.summary);
        }
        if (subject.references) {
            this.referenceGen(subject.references);
        }
        if (subject.relatedSubject) {
            this.relatedSubjectGen(subject.relatedSubject);
        }

        if ((!subject.blockStyle) && (!subject.titleStyle) && (!subject.contentStyle) && (!subject.chapter) && (!subject.tableOfContent) && (!subject.infoBox) && (!subject.summary) && (!subject.references) && (!subject.relatedSubject)){
            console.warn('You created a subject without any content')
        }

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
        if (chapter.bibliography) {
            this.bibliographyGen(chapter.bibliography);
        }
        if (chapter.gallery) {
            this.galleryGen(chapter.gallery);
        }
        if(chapter.subChapter){
            this.chapterGen(chapter.subChapter);
        }

        if((!chapter.blockStyle) && (!chapter.titleStyle) && (!chapter.contentStyle) && (!chapter.classicChapter) && (!chapter.bibliography) && (!chapter.gallery) && (!chapter.subChapter)){
            console.warn('You created a chapter without any content')
        }

        this.prefix.pop();
    }



    galleryGen(gallery:WikiGallery){
        this.prefix.push(".gallery");

        if(gallery.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(gallery.blockStyle).join("")}}\n`)
        }
        if(gallery.titleStyle){
            this.titleGen(gallery.titleStyle);
        }
        if(gallery.contentStyle){
            this.wikiElementGen(gallery.contentStyle);
        }

        if((!gallery.blockStyle) && (!gallery.titleStyle) && (!(gallery.contentStyle))){
            console.warn('You created a gallery without any content')
        }
        this.prefix.pop();
    }

    relatedSubjectGen(relatedSubject:WikiRelatedSubject){
        this.prefix.push(".relatedSubject");

        if(relatedSubject.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(relatedSubject.blockStyle).join("")}}\n`)
        }
        if(relatedSubject.titleStyle){
            this.titleGen(relatedSubject.titleStyle);
        }
        if(relatedSubject.contentStyle){
            this.wikiElementGen(relatedSubject.contentStyle);
        }

        if((!relatedSubject.blockStyle) && (!relatedSubject.titleStyle) && (!(relatedSubject.contentStyle))){
            console.warn('You created a related subject without any content')
        }

        this.prefix.pop();
    }

    referenceGen(reference:WikiReferences){
        this.prefix.push(".reference");

        if(reference.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(reference.blockStyle).join("")}}\n`)
        }
        if(reference.titleStyle){
            this.titleGen(reference.titleStyle);
        }
        if(reference.contentStyle){
            this.wikiElementGen(reference.contentStyle);
        }

        if((!reference.blockStyle) && (!reference.titleStyle) && (!(reference.contentStyle))){
            console.warn('You created a reference without any content')
        }

        this.prefix.pop();
    }

    bibliographyGen(bibliographyGen:WikiBibliography){
        this.prefix.push(".bibliography");

        if(bibliographyGen.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(bibliographyGen.blockStyle).join("")}}\n`)
        }
        if(bibliographyGen.titleStyle){
            this.titleGen(bibliographyGen.titleStyle);
        }
        if(bibliographyGen.contentStyle){
            this.wikiElementGen(bibliographyGen.contentStyle);
        }

        if((!bibliographyGen.blockStyle) && (!bibliographyGen.titleStyle) && (!(bibliographyGen.contentStyle))){
            console.warn('You created a bibliography without any content')
        }

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

        if((!classicChap.blockStyle) && (!classicChap.titleStyle) && (!(classicChap.contentStyle))){
            console.warn('You created a classic chapter without any content')
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

        if((!toc.blockStyle) && (!toc.titleStyle) && (!(toc.contentStyle))){
            console.warn('You created a table of content without any content')
        }

        this.prefix.pop();
    }

    infoBoxGen(infoBox:WikiInfoBox){
        this.prefix.push(".infoBox");

        if(infoBox.blockStyle){
            this.generate.push(`${this.prefix.join(" ")} {\n${this.blockStyleGen(infoBox.blockStyle).join("")}}\n`)
        }
        if(infoBox.contentStyle){
            this.wikiElementGen(infoBox.contentStyle)
        }

        if((!infoBox.blockStyle) && (!(infoBox.contentStyle))){
            console.warn('You created an info box without any content')
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

        if((!summary.blockStyle) && (!(summary.contentStyle))){
            console.warn('You created a summary without any content')
        }

        this.prefix.pop();
    }

    wikiElementGen(element:WikiElementStyle){
        if(element.text){
            this.textGen(element.text)
        }
        if (element.image) {
            this.generate.push(`${this.prefix.join(" ")} .image {\n${this.imageStyleGen(element.image).join("")}}\n`);
        }
        if (element.table) {
            this.generate.push(`${this.prefix.join(" ")} .table {\n${this.tableStyleGen(element.table).join("")}}\n`);
        }
        if (element.button) {
            this.generate.push(`${this.prefix.join(" ")} .button {\n${this.buttonStyleGen(element.button).join("")}}\n`);
        }

        if((!element.text) && (!element.image) && (!element.table) && (!element.button)){
            console.warn('You created an element without any content')
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

        if((!text.basic) && (!text.bold) && (!text.italic) && (!text.link)){
            console.warn('You created a text without any content')
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

        if (result.length == 0){
            console.warn('You created a textStyle without setting any attributes')
        }

        return result
    }

    imageStyleGen(image:WikiImageStyle) {
        let result:string[] = []


        if(image.style){
            result = this.blockStyleGen(image.style)
        }

        return result;
    }

    tableStyleGen(table:WikiTableStyle) {
        let result:string[] = []

        if(table.border){
            result.push(`\tborder: ${table.border};\n`)//TODO meilleur composition de border ?
        }
        if(table.alignment){
            result.push(`\talign-content: ${table.alignment};\n`)
        }

        return result;
    }

    buttonStyleGen(button:WikiButtonStyle) {
        let result:string[] = []

        if(button.border){
            result.push(`\tborder: ${button.border};\n`)//TODO meilleur composition de border ?
        }
        if(button.alignment){
            result.push(`\talign-content: ${button.alignment};\n`)
        }

        return result;
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

        if (result.length == 0){
            console.warn('You created a blockStyle without setting any attributes')
        }

        return result;
    }

    titleGen(title:WikiTextStyle){
        this.prefix.push(".title");
        this.generate.push(`${this.prefix.join(" ")} {\n${this.textStyleGen(title).join("")}}\n`)
        this.prefix.pop();
    }

}
