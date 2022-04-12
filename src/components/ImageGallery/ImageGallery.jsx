import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './imageGallery.css';


function ImageGallery(props) {
  const {images} = props;

  return (
          <div>
            
          <ul className="slider-container">
                 {
                     images.map((image, i) => <li key={i+image} ><img className="gallery-item" src={process.env.REACT_APP_IMAGES_URL + image} alt="Imagen de la propiedad"/> </li>)
                 }
             </ul>
          </div>
      );

}

// function ImageGallery(props) {
//     const { uniqueID, images, className } = props;
//     const UNIQUE_CLASS = "nc_glide2_gallery_" + uniqueID;

//     useEffect(() => {
//         new Glide(`.${UNIQUE_CLASS}`).mount();
//     }, [UNIQUE_CLASS, images]);

//     const renderDots = () => {
//     return (
//         <div
//         className="glide__bullets flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5"
//         data-glide-el="controls[nav]"
//         >
//         {images.map((_, i) => (
//             <button
//             className="glide__bullet w-1.5 h-1.5 rounded-full bg-neutral-300"
//             key={i}
//             data-glide-dir={`=${i}`}
//             />
//         ))}
//         </div>
//     );
//     };

// const renderSliderGallery = () => {
//   return (
//     <div className={`${UNIQUE_CLASS}`}>
//         <div className="glide__track" data-glide-el="track">
//             <ul className="glide__slides">
//                 {
//                     images.map((image, i) => <li key={i+image} className="glide__slide"><img className="gallery-item" src={process.env.REACT_APP_IMAGES_URL + image} alt="Imagen de la propiedad"/> </li>)
//                 }
//             </ul>
//         </div>

//         <div className="glide__track" data-glide-el="track">
//           <ul className="glide__slides">
//             {images.map((item, index) => (
//               <li key={index} className="glide__slide">
//                 <div>
//                     <img className="gallery-item" src={process.env.REACT_APP_IMAGES_URL + item} alt="Imagen de la propiedad" />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* DOTS */}
//         <div className="absolute -bottom-4 inset-x-0 h-10 bg-gradient-to-t from-neutral-900"></div>
//         {renderDots()}

//         <div className="glide__arrows" data-glide-el="controls">
//             <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
//             <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
//         </div>
//     </div>
//   )};
//   return (
//     <div className={`nc-GallerySlider`} data-nc-id="GallerySlider">
//       {renderSliderGallery()}
//     </div>
//   );
//}

export default ImageGallery