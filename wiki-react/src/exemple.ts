import { ChapterTypeContent, ClassicChapterContent, SubjectContent, WikiContent, WikiElementTypeContent } from "./content"

const chapter1:ClassicChapterContent = {
    type:ChapterTypeContent.CLASSIC,
    title:"Répartition",
    value:{
        type:WikiElementTypeContent.TEXT,
        text:"Cette espèce est <a href=\"\">endémique</a> de l'Est de la <a href=\"\">Thaïlande</a>."
    }
}
const chapter2:ClassicChapterContent = {
    type:ChapterTypeContent.CLASSIC,
    title:"Étymologie",
    value:{
        type:WikiElementTypeContent.TEXT,
        text:"Cette espèce est nommée en l'honneur de <a href=\"\">Masafumi Matsui.</a> "
    }
}
const chapter3:ClassicChapterContent = {
    type:ChapterTypeContent.CLASSIC,
    title:"Publication originale",
    value:{
        type:WikiElementTypeContent.TEXT,
        text:"Cette espèce est <a href=\"\">endémique</a> de l'Est de la <a href=\"\">Thaïlande</a>."
    }
}
const chapter4:ClassicChapterContent = {
    type:ChapterTypeContent.CLASSIC,
    title:"Liens externes",
    value:{
        type:WikiElementTypeContent.TEXT,
        text:
        "(en) Référence <a href=\"\"><span class=\"italic\">NCBI</span></a> : <a href=\"\"><span class=\"italic\">Tropidophorus matsuii</span></a> [<a href=\"\">archive</a>] (<a href=\"\">taxons inclus</a> [<a href=\"\">archive</a>]) (consulté le 19 décembre 2012)</br>"
        +"(en) Référence <a href=\"\"><span class=\"italic\">Reptarium Reptile Database</span></a> [<a href=\"\">archive</span>] : <a href=\"\"><span class=\"italic\">Tropidophorus matsuii</span> Hikida, Orlov, Nabhitabhata & Ota, 2002</a> [<a href=\"\">archive</a>] (consulté le 19 décembre 2012)</br>"
        +"(en) Référence <a href=\"\"><span class=\"italic\">uBio</span></a> : <a href=\"\"><span class=\"italic\">Tropidophorus matsuii</span> Hikida, Orlov, Nabhitabhata & Ota 2002</a> [<a href=\"\">archive</a>] (consulté le 19 décembre 2012)"

    }
}
const subject:SubjectContent = {
    chapters:[chapter1,chapter2,chapter3,chapter4],
    infoBox:undefined,
    subject:"Tropidophorus matsuii",
    summary:{ 
        value: {
            type:WikiElementTypeContent.TEXT,
            text:"<span class=\"bold\">Tropidophorus matsuii</span> est une <a href=\"\">espèce</a> de <a href=\"\">sauriens</a> de la famille des <a href=\"\">Scincidae</a>." 
        }
    },
    tableOfContent:{
        value:[{content:"Répartition",url:""},{content:"Étymologie",url:""},{content:"Publication originale",url:""},{content:"Liens externes",url:""}]
    },

}

export const exemplePageTropidophorus:WikiContent={
    subjects: [
        subject
    ]
            
}
