import React from 'react'
import {default as ClChptStyle} from "../model/kernel/models/chapters/classic-chapter"
import { ClassicChapterContent } from '../model/kernel/models/content'

export default function ClassicChapter({classicChapter, content}:{classicChapter:ClChptStyle, content:ClassicChapterContent}) {
  return (
    <div>
        <h2>{content.title}</h2>
        <p>{content.value.text}</p>
    </div>
  )
}
