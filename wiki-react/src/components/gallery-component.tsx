import { GalleryChapterContent } from '../model/kernel/models/content'
import ImageComponent from "./image-component";

export default function GalleryComponent({content}:{content:GalleryChapterContent}) {
  return (
    <div className='gallery'>
        <h2 className='title'>Gallerie</h2>
        {content.images.map(((elt)=> {
            return <ImageComponent content={elt}/>;
        }))}
    </div>
  )
}
