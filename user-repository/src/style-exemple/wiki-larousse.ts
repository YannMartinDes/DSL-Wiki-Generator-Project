import { WikiCssGenerator } from "../generator/wiki-css-generator";
import { BlockStyleBuilder } from "../model/embedded/BlockStyleBuilder";
import { WikiBuilder } from "../model/embedded/WikiBuilder";
import { AlignContent } from "../model/kernel/models/enum/align-content.enum";
import { Border } from "../model/kernel/models/enum/border.enum";
import { Color } from "../model/kernel/models/enum/color.enum";
import { FontWeight } from "../model/kernel/models/enum/font-weight.enum";

const wikiBuilder = WikiBuilder.createWiki()

wikiBuilder
    .editContentBoxStyle()
        .setBackgroundColor("#F5F5FA")
    .endBlockEdit()
    .editContentStyle()
        .editTextStyle()
            .editBoldTextStyle()
                .setFontColor(Color.BLACK)
                .putInBold(FontWeight.BOLD)
            .endTextEdit()
            .editTextStyle()
                .setFontColor(Color.BLACK)
                .setPolice("Trebuchet MS")
            .endTextEdit()
        .endTextEdit()

wikiBuilder
    .editSubjectStyle()
        .editContentBoxStyle()
            .setBackgroundColor(Color.WHITE)
            .setMargin(20)
        .endBlockEdit()

wikiBuilder
    .editSubjectStyle()
        .editInfoBoxStyle()
            .editContentBoxStyle()
                .setBorder(2, "#566BB3", Border.SOLID)
                .setBackgroundColor("#F6F6FB")
                .setMargin(15, undefined)
            .endBlockEdit()
            .editContentStyle()
                .editTextStyle()
                    .editLinkTextStyle()
                        .setFontColor("#566BB3")
                    .endTextEdit()
                    .editBoldTextStyle()
                        .setFontColor(Color.BLACK)
                        .putInBold(FontWeight.BOLD)
                    .endTextEdit()
                .endTextEdit()

wikiBuilder
    .editSubjectStyle()
        .editRelatedSubjectStyle()
            .editContentBoxStyle()
                .addShadow(Color.GRAY)
                .setBackgroundColor(Color.WHITE)
                .setMargin(15, undefined)
            .endBlockEdit()
            .editContentStyle()
                .editTextStyle()
                    .editTextStyle()
                        .setFontSize(10)
                    .endTextEdit()
                    .editLinkTextStyle()
                        .setFontColor("#566BB3")
                        .putInBold(FontWeight.BOLD)
                    .endTextEdit()
                    .editBoldTextStyle()
                        .setFontColor(Color.BLACK)
                        .putInBold(FontWeight.BOLD)
                    .endTextEdit()
                .endTextEdit()

wikiBuilder
    .editSubjectStyle()
        .editSummaryStyle()
            .editContentBoxStyle()
                .setBackgroundColor(Color.WHITE)
                .setMargin(15)
            .endBlockEdit()
            .editContentStyle()
            .editTextStyle()
                .editBoldTextStyle()
                    .setFontColor(Color.BLACK)
                    .putInBold(FontWeight.BOLD)
                .endTextEdit()
                .editTextStyle()
                    .setFontColor(Color.BLACK)
                    .setPolice("Trebuchet MS")
                .endTextEdit()
            .endTextEdit()

export const wikiLarouseModel = wikiBuilder.createModel();
//const cssGenerator = new WikiCssGenerator();