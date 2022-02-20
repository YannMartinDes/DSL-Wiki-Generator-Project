import { WikiCssGenerator } from "./generator/wiki-css-generator";
import { WikiBuilder } from "./model/embedded/WikiBuilder";
import { AlignContent } from "./model/kernel/models/enum/align-content.enum";
import { Border } from "./model/kernel/models/enum/border.enum";
import { Color } from "./model/kernel/models/enum/color.enum";
import { UnityFontSize } from "./model/kernel/models/enum/font-size.enum";
import { FontStyle } from "./model/kernel/models/enum/font-style.enum";
import { FontWeight } from "./model/kernel/models/enum/font-weight.enum";
import { TextAlignment } from "./model/kernel/models/enum/text-align.enum";
import { TextTransform } from "./model/kernel/models/enum/text-transform.enum";
const wikiBuilder = new WikiBuilder()
wikiBuilder
    .editBlock()
        .setAlignment(AlignContent.CENTER)
        .setBackgroundColor(Color.ROSE_QUARTZ)
        .setMargin(5,UnityFontSize.PERCENT)
    .endBlockEdit()
    .editContent().editText()
        .textStyle()
            .italicize(FontStyle.NORMAL)
            .setFontColor(Color.SERENITY)
            .capitalized(TextTransform.CAPITALIZE)
            .setTextAlign(TextAlignment.CENTER)
        .endTextStyle()
        .boldTextStyle()
            .setFontColor("green")
            .putInBold(FontWeight.BOLD)
        .endTextStyle()
    .endTextEdit();//Can't go further

wikiBuilder.editSubject()
    .editTitle().italicize(FontStyle.NORMAL).endTextStyle()
    .editBlock().setBackgroundColor("red").endBlockEdit()
    .editContent().editText().textStyle().setFontColor("blue").endTextStyle();//Can't go further


wikiBuilder.editSubject().editSummary()
    .editBlock().setAlignment(AlignContent.CENTER).endBlockEdit()
    .editContent().editText().italicTextStyle().italicize(FontStyle.NORMAL).endTextStyle().endTextEdit()//Can't go further

wikiBuilder.editSubject().editTableOfContent()
    .isNumerated(true)
    .editTitle()
        .capitalized(TextTransform.CAPITALIZE)
        .setFontColor(Color.ROSE_QUARTZ)
    .endTextStyle()
    .editBlock()
        .setBorder(1,UnityFontSize.PERCENT,Color.ULTRA_VIOLET,Border.SOLID)
        .setPadding(5,UnityFontSize.PIXEL)
    .endBlockEdit()
    .editContent().editText()
        .linkTextStyle()
            .italicize(FontStyle.NORMAL)
            .underlined(true)
        .endTextStyle()
    .endTextEdit();//Can't go further

wikiBuilder.editSubject().editChapter().editClassicChapter()
    .editTitle()
        .underlined(true)
    .endTextStyle()
    .editContent().editText()
        .textStyle()
            .putInBold(FontWeight.BOLD)
            .setFontColor("#00FF00")
            .setPolice("Arial")
        .endTextStyle().endTextEdit();//Can't go further

wikiBuilder.editSubject().editChapter().editSubChapter()
    .editBlock()
        .setBorder(5,UnityFontSize.PIXEL,Color.ULTRA_VIOLET,Border.DOTTED,Border.SOLID)
        .setMargin(5,UnityFontSize.PIXEL)
    .endBlockEdit()
    .editTitle()
        .italicize(FontStyle.NORMAL)
        .setTextAlign(TextAlignment.CENTER)
    .endTextStyle()
    .editContent().editText()
        .boldTextStyle()
            .capitalized(TextTransform.CAPITALIZE)
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