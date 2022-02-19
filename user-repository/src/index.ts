
import { WikiCssGenerator } from "./generator/wiki-css-generator";
import WikiText from "./model/kernel/models/elements/text";
import WikiElementStyle from "./model/kernel/models/elements/wiki-element-style";
import WikiTextStyle from "./model/kernel/models/style/textStyle";
import Wiki from "./model/kernel/models/wiki";

const test = new Wiki()
test.contentStyle = new WikiElementStyle();
test.contentStyle.text = new WikiText({basic:new WikiTextStyle({caps:"uppercase",font_color:"black"})})
const cssGenerator = new WikiCssGenerator();
cssGenerator.generateCssFile(test)

