import { ButtonContent, ChapterContent, ClassiqueChapterContent, ImageContent, InfoBoxContent, NavBarContent, ReferencesContent, RelatedSubjectContent, SubjectContent, SummaryContent, TextContent, TOCContent, WikiContent, WikiElementContent } from "../kernel/models/content"
import { dungeonsAndDragons } from "./dungeons-and-dragons"
import { mesopotamie } from "./mesopotamie"

const chapter1:ChapterContent = new ClassiqueChapterContent(
    "Répartition",
    [new TextContent("Cette espèce est <a href=\"\">endémique</a> de l'Est de la <a href=\"\">Thaïlande</a>.")]
)
const chapter2:ChapterContent = new ClassiqueChapterContent(
    "Étymologie",
    [new TextContent("Cette espèce est nommée en l'honneur de <a href=\"\">Masafumi Matsui.</a> ")]
)
const chapter3p1:ChapterContent = new ClassiqueChapterContent(
    "Un sous chapitre",
    [new TextContent("Cette espèce est <a href=\"\">endémique</a> de l'Est de la <a href=\"\">Thaïlande</a>."),new ButtonContent('https://fr.wikipedia.org/wiki/Tropidophorus_matsuii',"wikipedia page")]
    )
const chapter3:ChapterContent = new ClassiqueChapterContent(
    "Publication originale",
    [new TextContent("Cette espèce est <a href=\"\">endémique</a> de l'Est de la <a href=\"\">Thaïlande</a>."),new ImageContent('/images/lezard.jpeg',"un lézard"),new ButtonContent('https://fr.wikipedia.org/wiki/Tropidophorus_matsuii',"wikipedia page"),chapter3p1]
    )

const infoBox :InfoBoxContent = new InfoBoxContent([new TextContent(`<ul><li>endémique</li><li>originale</li><li>Masafumi Matsui</li></ul>`)])
const reference = new ReferencesContent([new TextContent("(en) Référence <a href=\"\"><i>NCBI</span></a> : <a href=\"\"><i>Tropidophorus matsuii</span></a> [<a href=\"\">archive</a>] (<a href=\"\">taxons inclus</a> [<a href=\"\">archive</a>]) (consulté le 19 décembre 2012)</br>"
    +"(en) Référence <a href=\"\"><i>Reptarium Reptile Database</span></a> [<a href=\"\">archive</span>] : <a href=\"\"><i>Tropidophorus matsuii</span> Hikida, Orlov, Nabhitabhata & Ota, 2002</a> [<a href=\"\">archive</a>] (consulté le 19 décembre 2012)</br>"
    +"(en) Référence <a href=\"\"><i>uBio</span></a> : <a href=\"\"><i>Tropidophorus matsuii</span> Hikida, Orlov, Nabhitabhata & Ota 2002</a> [<a href=\"\">archive</a>] (consulté le 19 décembre 2012)")]
)
const relatedSubject = new RelatedSubjectContent([new TextContent(`Beolens, Watkins & Grayson, 2011 : The Eponym Dictionary of Reptiles. Johns Hopkins University Press, p. 1-296`)])
const tropidophorusSubject:SubjectContent = new SubjectContent(
    {
        url:"tropidophorus-matsuii",
        subject:"Tropidophorus matsuii",
        chapters:[chapter1,chapter2,chapter3],
        summary: new SummaryContent(new TextContent("<b>Tropidophorus matsuii<b> est une <a href=\"\">espèce</a> de <a href=\"\">sauriens</a> de la famille des <a href=\"\">Scincidae</a>." )),
        tableOfContent:new TOCContent([{content:"Répartition",url:""},{content:"Étymologie",url:""},{content:"Publication originale",url:""},{content:"Liens externes",url:""}]),
        infoBox:infoBox,
        reference:reference,
        relatedSubject:relatedSubject
    }

)

const tropidophorusSubject2:SubjectContent = new SubjectContent(
    {
        url:"tropidophorus-matsuii-2",
        subject:"Tropidophorus matsuii 2",
        chapters:[chapter1,chapter2,chapter3],
        summary: new SummaryContent(new TextContent("<b>Tropidophorus matsuii</b> est une <a href=\"\">espèce</a> de <a href=\"\">sauriens</a> de la famille des <a href=\"\">Scincidae</a>." )),
        tableOfContent:new TOCContent([{content:"Répartition",url:""},{content:"Étymologie",url:""},{content:"Publication originale",url:""},{content:"Liens externes",url:""}]),
        infoBox:infoBox,
        reference:reference,
        relatedSubject:relatedSubject
    }

)
const navBarList :{content:WikiElementContent,url:string}[]= [
    {content:new TextContent("matsuii"),url:"tropidophorus-matsuii"},
    {content:new TextContent("Mésopotamie"),url:"meso"},
    {content:new TextContent("Dungeons &amp; Dragons"),url:"dungeons-drangons"},
]
const navBar = new NavBarContent(navBarList)

export const exemplePageTropidophorus:WikiContent=new WikiContent([tropidophorusSubject,mesopotamie,dungeonsAndDragons],navBar)