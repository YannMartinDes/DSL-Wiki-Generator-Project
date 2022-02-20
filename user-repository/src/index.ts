import { WikiCssGenerator } from "./generator/wiki-css-generator";
import { WikiBuilder } from "./model/embedded/WikiBuilder";
import { AlignContent } from "./model/kernel/models/enum/align-content.enum";
import { TextAlignment } from "./model/kernel/models/enum/text-align.enum";

const wikiBuilder = new WikiBuilder()
wikiBuilder
    .editBlock()
        .setAlignment(AlignContent.CENTER)
        .setBackgroundColor("red")
        .setMargin("5%")
    .endBlockEdit()
    .editContent().editText()
        .textStyle()
            .italicize(true)
            .capitalized(true)
            .setTextAlign(TextAlignment.CENTER)
        .endTextStyle()
        .boldTextStyle()
            .setFontColor("green")
            .putInBold(true)
        .endTextStyle()
    .endTextEdit();//Can't go further

wikiBuilder.editSubject()
    .editTitle().italicize(true).endTextStyle()
    .editBlock().setBackgroundColor("red").endBlockEdit()
    .editContent().editText().textStyle().setFontColor("blue").endTextStyle();//Can't go further


wikiBuilder.editSubject().editSummary()
    .editBlock().setAlignment(AlignContent.CENTER).endBlockEdit()
    .editContent().editText().italicTextStyle().italicize(true).endTextStyle().endTextEdit()//Can't go further

wikiBuilder.editSubject().editTableOfContent()
    .isNumerated(true)
    .editTitle()
        .capitalized(true)
    .endTextStyle()
    .editBlock()
        .setBorder("1px solid black")
        .setPadding("5px")
    .endBlockEdit()
    .editContent().editText()
        .linkTextStyle()
            .italicize(true)
            .underlined(true)
        .endTextStyle()
    .endTextEdit();//Can't go further

wikiBuilder.editSubject().editChapter().editClassicChapter()
    .editTitle()
        .underlined(true)
    .endTextStyle()
    .editContent().editText()
        .textStyle()
            .putInBold(true)
            .setPolice("Arial")
        .endTextStyle().endTextEdit();//Can't go further

wikiBuilder.editSubject().editChapter().editSubChapter()
    .editBlock()
        .setBorder("5px black solid")
        .setMargin("5px")
    .endBlockEdit()
    .editTitle()
        .italicize(true)
        .setTextAlign(TextAlignment.CENTER)
    .endTextStyle()
    .editContent().editText()
        .boldTextStyle()
            .capitalized(true)
        .endTextStyle()
        .linkTextStyle()
            .underlined(true)
        .endTextStyle()
    .endTextEdit();//Can't go further

//TODO Limiter le nombre de sous-chapitre
wikiBuilder.editSubject().editChapter().editSubChapter().editSubChapter().editSubChapter().editTitle().setFontColor("gray");//Be aware of that....mddify only one level of subchapter

const res = wikiBuilder.createModel();
console.log(res);

const cssGenerator = new WikiCssGenerator();
cssGenerator.generateCssFile(res)