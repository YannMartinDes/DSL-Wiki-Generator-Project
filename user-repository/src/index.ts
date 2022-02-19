
import { WikiCssGenerator } from "./generator/wiki-css-generator";
import WikiText from "./model/kernel/models/elements/wiki-text";
import WikiElementStyle from "./model/kernel/models/elements/wiki-element";
import WikiTextStyle from "./model/kernel/models/style/wiki-text-style";
import Wiki from "./model/kernel/models/wiki";

const test = new Wiki()
test.contentStyle = new WikiElementStyle();
test.contentStyle.text = new WikiText({basic:new WikiTextStyle({caps:true,font_color:"black"})})
const cssGenerator = new WikiCssGenerator();
cssGenerator.generateCssFile(test)

