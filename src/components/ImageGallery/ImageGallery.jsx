import React from "react";
import "./imageGallery.css";

function ImageGallery(props) {
  const { images } = props;

  return (
    <ul className="slider-container">
      {images.map((image, i) => (
        <li key={i + image}>
          <img
            className="gallery-item"
            src={process.env.REACT_APP_IMAGES_URL + image.src}
            alt="Imagen de la propiedad"
          />{" "}
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
