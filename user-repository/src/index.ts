import {WikiCssGenerator} from "./generator/wiki-css-generator";
import {WikiBuilder} from "./model/embedded/WikiBuilder";
import {AlignContent} from "./model/kernel/models/enum/align-content.enum";
import {Border} from "./model/kernel/models/enum/border.enum";
import {Color} from "./model/kernel/models/enum/color.enum";
import {UnitySize} from "./model/kernel/models/enum/unity-font-size.enum";
import {FontStyle} from "./model/kernel/models/enum/font-style.enum";
import {FontWeight} from "./model/kernel/models/enum/font-weight.enum";
import {TextAlignment} from "./model/kernel/models/enum/text-align.enum";
import {TextTransform} from "./model/kernel/models/enum/text-transform.enum";
import {TextDecoration} from "./model/kernel/models/enum/text-decoration.enum";
import { Float } from "./model/kernel/models/enum/float";
import { SlayTheSpireModel } from "./style-exemple/wiki-fandom-slaythespire";

const wikiBuilder = WikiBuilder.createWiki()
wikiBuilder
    .editContentBoxStyle()
        .setAlignment(AlignContent.CENTER)
        .setBackgroundColor(Color.GREEN)
        .setMargin(5,UnitySize.PERCENT)
    .endBlockEdit()
    .editContentStyle().editTextStyle()
        .editTextStyle()
            .italicize(FontStyle.NORMAL)
            .setFontColor(Color.GRAY)
            .capitalizedText(TextTransform.CAPITALIZE)
            .setTextAlign(TextAlignment.CENTER)
        .endTextEdit()
        .editBoldTextStyle()
            .setFontColor("green")
            .putInBold(FontWeight.BOLD)
        .endTextEdit()
    .endTextEdit()//Can't go further

wikiBuilder.editSubjectStyle()
    .editTitleStyle().editContentStyle().italicize(FontStyle.NORMAL).endTextEdit().endTitleEdit()
    .editContentBoxStyle().setBackgroundColor("red").endBlockEdit()
    .editContentStyle().editTextStyle().editTextStyle().setFontColor("blue").endTextEdit();//Can't go further


wikiBuilder.editSubjectStyle().editSummaryStyle()
    .editContentBoxStyle().centerContent().endBlockEdit()
    .editContentStyle().editTextStyle().editItalicTextStyle().italicize(FontStyle.NORMAL).endTextEdit().endTextEdit()//Can't go further

wikiBuilder.editSubjectStyle().editTableOfContentStyle()
    // .isNumerated(true)
    .editTitleStyle().editContentStyle()
        .capitalizedText()
        .setFontColor(Color.BROWN)
    .endTextEdit().endTitleEdit()
    .editContentBoxStyle()
        .setBorder(50)
        .setPadding(5,UnitySize.PIXEL)
        .setMarginSides(5,4,0,3)
    .endBlockEdit()
    .editContentStyle().editTextStyle()
        .editLinkTextStyle()
            .italicize(FontStyle.NORMAL)
            .underlined(TextDecoration.UNDERLINE)
        .endTextEdit()
    .endTextEdit();//Can't go further

wikiBuilder.editSubjectStyle().editChapterStyle().editClassicChapterStyle()
    .editTitleStyle().editContentStyle()
        .underlined()
    .endTextEdit().endTitleEdit()
    .editContentStyle().editTextStyle()
        .editTextStyle()
            .putInBold()
            .setFontColor("#00FF00")
            .setPolice("Arial")
        .endTextEdit().endTextEdit();//Can't go further

wikiBuilder.editSubjectStyle().editChapterStyle().editSubChapterStyle()
    .editContentBoxStyle()
        .setBorder(5,Color.VIOLET,Border.DOTTED)
        .setMargin(5,UnitySize.PIXEL)
    .endBlockEdit()
    .editTitleStyle().editContentStyle()
        .italicize(FontStyle.NORMAL)
        .setTextAlign(TextAlignment.CENTER)
    .endTextEdit().endTitleEdit()
    .editContentStyle().editTextStyle()
        .editBoldTextStyle()
            .capitalizedText(TextTransform.CAPITALIZE)
        .endTextEdit()
        .editLinkTextStyle()
            .underlined(TextDecoration.UNDERLINE)
        .endTextEdit()
    .endTextEdit();//Can't go further

wikiBuilder.editSubjectStyle().editChapterStyle().editSubChapterStyle().editSubChapterStyle().editSubChapterStyle().editTitleStyle().editContentStyle().setFontColor("gray").endTextEdit().endTitleEdit();//Be aware of that....mddify only one level of subchapter

// wikiBuilder.editOnHoverStyle().editNavBarStyle()
//     .editContentBoxStyle()
//         .setMargin(8,UnitySize.PERCENT)
//         .setBackgroundColor(Color.BROWN)
//     .endBlockEdit();

// wikiBuilder.editOnHoverStyle().editSubjectStyle().editChapterStyle()
//     .editTitleStyle().editContentStyle().italicize(FontStyle.ITALIC).endTextEdit().endTitleEdit()
//     .editGalleryStyle().editContentStyle().editTextStyle().editLinkTextStyle().putInBold(FontWeight.BOLDER).endTextEdit().endTextEdit();

// wikiBuilder.editAlternativeDisplayStyle({maxWidth:500}).editSubjectStyle().editContentBoxStyle().setBackgroundColor(Color.AQUA)
// wikiBuilder.editSubjectStyle().editContentBoxStyle()
//         .setMarginSides(0,10,0,10,UnitySize.PERCENT)
//     .endBlockEdit()
//     .editChapterStyle()
//         .editTitleStyle()
//             .editContentBoxStyle()
//                 .setBorderBot(2,Color.BLACK,Border.SOLID)
//             .endBlockEdit()
//             .editContentStyle()
//                 .setFontSize(2,UnitySize.EM)
//             .endTextEdit()
//         .endTitleEdit()
//         .editContentStyle()
//             .editImageStyle()
//                 .editContentBoxStyle()
//                     .putBoxFloatting(Float.RIGHT)
//                     .setBackgroundColor("#EEEEEE")
//                     .setPadding(5,UnitySize.PIXEL)
//                     .setBorder(2,Color.BLACK,Border.SOLID)
//                 .endBlockEdit()
//                 .editAbstractTextStyle()
//                     .italicize(FontStyle.ITALIC)
//                     .setTextAlign(TextAlignment.CENTER)
//                 .endTextEdit()
//             .endImageEdit()

// wikiBuilder.editSubjectStyle().editChapterStyle().editSubChapterStyle().editTitleStyle()
//     .editContentBoxStyle().setBorderBot(4,Color.GRAY,Border.DOTTED).endBlockEdit()
//     .editContentStyle().setFontSize(1.5,UnitySize.EM)

// wikiBuilder.editNavBarStyle().editContentBoxStyle().setBackgroundColor("#EEEEEE")
// wikiBuilder.editSubjectStyle().editTableOfContentStyle().editContentBoxStyle().setBorder(1,Color.GRAY,Border.SOLID).setBackgroundColor("#EEEEEE")

// const res = wikiBuilder.createModel();
// console.log(res);

const cssGenerator = new WikiCssGenerator();
cssGenerator.generateCssFile(SlayTheSpireModel)
