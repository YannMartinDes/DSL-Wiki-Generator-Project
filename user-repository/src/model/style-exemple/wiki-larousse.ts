import { WikiCssGenerator } from "../../generator/wiki-css-generator";
import { WikiBuilder } from "../embedded/WikiBuilder";
import { Border } from "../kernel/models/enum/border.enum";
import { Color } from "../kernel/models/enum/color.enum";
import { FontWeight } from "../kernel/models/enum/font-weight.enum";

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
        .editInfoBoxStyle()
            .editContentBoxStyle()
                .setBorder(2, "#566BB3", Border.SOLID)
                .setBackgroundColor("#F6F6FB")
                .setMargin(5, undefined)
            .endBlockEdit()
            .editContentStyle()
                .editTextStyle()
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
        .editRelatedSubjectStyle()
            .editContentBoxStyle()
                .addShadow(Color.GRAY)
                .setBackgroundColor(Color.WHITE)
                .setMargin(5, undefined)
            .endBlockEdit()
            .editContentStyle()
                .editTextStyle()
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

const res = wikiBuilder.createModel();
const cssGenerator = new WikiCssGenerator();
cssGenerator.generateCssFile(res)