import { WikiBuilder } from "./WikiBuilder";

const wikiBuilder = new WikiBuilder()
wikiBuilder
    .editBlock()
        .setAlignment("center")
        .setBackgroundColor("red")
        .setMargin("5%")
    .endBlockEdit()
    .editContent().editText()
        .textStyle()
            .italicize(true)
            .capitalized(true)
            .setTextAlign("center")
        .endTextStyle()
        .boldTextStyle()
            .setFontColor("green")
            .putInBold(true)
        .endTextStyle()
    .endTextEdit();//Can't go further

wikiBuilder.editSubject()
    .editTitle().italicize(true).endTextStyle();//Can continue 


wikiBuilder.editSubject().editSummary()
    .editBlock().setAlignment("center").endBlockEdit()
    .editContent().editText().italicTextStyle().italicize(true).endTextStyle().endTextEdit()//Can't go further

wikiBuilder.editSubject().editTableOfContent()
    .isNumerated(true)
    .editTitle()
        .capitalized(true)
    .endTextStyle()
    .editBlock()
        .setBorder("1 solid black")
        .setPadding("5px")
    .endBlockEdit()
    .editContent().editText()
        .linkTextStyle()
            .italicize(true)
            .underlined(true)
        .endTextStyle().endTextEdit();//Can't go further

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
        .setTextAlign("center")
    .endTextStyle()
    .editContent().editText()
        .boldTextStyle()
            .capitalized(true)
        .endTextStyle()
        .linkTextStyle()
            .underlined(true)
        .endTextStyle()
    .endTextEdit();//Can't go further

wikiBuilder.editSubject().editChapter().editSubChapter().editSubChapter().editSubChapter();//Be aware of that....

wikiBuilder.createModel();