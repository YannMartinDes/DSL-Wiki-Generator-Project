import { ChapterContent, SubjectContent, SummaryContent, TextContent, TOCContent, WikiContent } from "../kernel/models/content"

const chapter1:ChapterContent = new ChapterContent(
    "Répartition",
    [new TextContent("Cette espèce est <a href=\"\">endémique</a> de l'Est de la <a href=\"\">Thaïlande</a>.")]
)
const chapter2:ChapterContent = new ChapterContent(
    "Étymologie",
    [new TextContent("Cette espèce est nommée en l'honneur de <a href=\"\">Masafumi Matsui.</a> ")]
)
const chapter3:ChapterContent = new ChapterContent(
    "Publication originale",
    [new TextContent("Cette espèce est <a href=\"\">endémique</a> de l'Est de la <a href=\"\">Thaïlande</a>.")]
)
const chapter4:ChapterContent = new ChapterContent(
    "Liens externes",
    [new TextContent("(en) Référence <a href=\"\"><span class=\"italic\">NCBI</span></a> : <a href=\"\"><span class=\"italic\">Tropidophorus matsuii</span></a> [<a href=\"\">archive</a>] (<a href=\"\">taxons inclus</a> [<a href=\"\">archive</a>]) (consulté le 19 décembre 2012)</br>"
    +"(en) Référence <a href=\"\"><span class=\"italic\">Reptarium Reptile Database</span></a> [<a href=\"\">archive</span>] : <a href=\"\"><span class=\"italic\">Tropidophorus matsuii</span> Hikida, Orlov, Nabhitabhata & Ota, 2002</a> [<a href=\"\">archive</a>] (consulté le 19 décembre 2012)</br>"
    +"(en) Référence <a href=\"\"><span class=\"italic\">uBio</span></a> : <a href=\"\"><span class=\"italic\">Tropidophorus matsuii</span> Hikida, Orlov, Nabhitabhata & Ota 2002</a> [<a href=\"\">archive</a>] (consulté le 19 décembre 2012)")]
)

const tropidophorusSubject:SubjectContent = new SubjectContent(
    "Tropidophorus matsuii",
    new SummaryContent(new TextContent("<span class=\"bold\">Tropidophorus matsuii</span> est une <a href=\"\">espèce</a> de <a href=\"\">sauriens</a> de la famille des <a href=\"\">Scincidae</a>." )),
    new TOCContent([{content:"Répartition",url:""},{content:"Étymologie",url:""},{content:"Publication originale",url:""},{content:"Liens externes",url:""}]),
    undefined,
    [chapter1,chapter2,chapter3,chapter4]
)



export const exemplePageTropidophorus:WikiContent=new WikiContent([tropidophorusSubject])

