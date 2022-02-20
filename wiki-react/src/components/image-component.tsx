import {ImageContent} from "../model/kernel/models/content"

export default function ImageComponent({content}:{content:ImageContent}) {
  return (
    <img className='image' src={content.url} alt={content.description}></img>
  )
}
