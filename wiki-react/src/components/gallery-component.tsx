import { GalleryContent} from '../model/kernel/models/content'
import ImageComponent from "./image-component";

export default function GalleryComponent({content}:{content:GalleryContent}) {
  return (
    <div className='gallery'>
        <h2 className='title'>Gallery</h2>
        {content.imagesContent.map(((elt)=> {
            return <ImageComponent content={elt}></ImageComponent>;
        }))}
    </div>
  )
}
