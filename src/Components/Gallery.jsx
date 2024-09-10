import cat1 from '../assets/images/cat2.jpg'
import cat2 from '../assets/images/cat4.jpg'
import cat3 from '../assets/images/cat5.jpg'
import s from '../style/Gallery.module.scss'

export const Gallery = () =>{

    const images= [cat1, cat2, cat3]
    return(
    <>
    <h2>This is cat's gallery:</h2>
    <div className={s.galleryContainer}>
    {images.map((image, index)=>(
        <img key={index} src={image} className={s.imageStyle} />
    ))}
     </div>
    </>
   
    )
}