import {WikiCssGenerator} from "./generator/wiki-css-generator";
import {wikiLarouseModel} from "./style-exemple/wiki-larousse";


const cssGenerator = new WikiCssGenerator();
cssGenerator.generateCssFile(wikiLarouseModel)
