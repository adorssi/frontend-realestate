import React from 'react';
import './PropertyCard.css';
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { TagIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";
import bgHome from '../../images/bg-home.jpg';
import { useState, useEffect } from 'react';


function PropertyCard(props) {
    let id = 3;
    const url = `${process.env.REACT_APP_API_URL}/api/property/${id}`;
    const [property, setProperty] = useState([])

	useEffect(() => {
		fetch(url)
		.then(response => response.json())
		.then(data => {
			setProperty(data.data);
		});
	}, []);

    const { title, operationType, ref, mainImage, imageGallery, bedrooms, toilet, garage, price, financing, featured } = property;

  return (
    <div className='property__card'>
        <div className='property__card-images'>
            <div className='gallery'>
                <div className='gallery__buttons'>
                    <span className='arrow arrow--left'> <ArrowCircleLeftIcon /></span>
                    <span className='arrow arrow--right'><ArrowCircleRightIcon /></span>
                </div>
                
                <img className='gallery-item' src={bgHome} width='100%' alt='Imagen Propiedad' />
            
                {/* {
                    imageGallery.map(image => {
                        return <img src={image} width='100%' alt='Imagen Propiedad' />
                    })
                }                  */}
            </div>
        </div>
        <div className='property__card-info'>
            <div className='property__card-tags'>
                <div className='location tag'>
                    <LocationMarkerIcon className='location-icon' />
                    <p>{ property.city.name }</p>
                </div>
                <div className='operation tag'>
                    <TagIcon className='operation-icon' />
                    <p>{ operationType }</p>
                </div>
            </div>
            <div className='title'>
                    <span className='ref tag'>REF# { ref }</span>
                    <h2 className='property-title'>{title}</h2>
            </div>
            <section className='main-amenities'>
                <article>
                    <i className="fas fa-bed"></i>
                    <p>{ bedrooms }</p>
                </article>
                <article>
                    <i className="fas fa-toilet"></i>
                    <p>{ toilet }</p>
                </article>
                <article>
                    <i className="fas fa-car"></i>
                    <p>{ garage }</p>
                </article>
            </section>
            <section className='end-items'>
                { financing && <span className='financing'>¡Financiación!</span>}
                
                <article className='price-fields'>
                    <span className='price'> { property.currency.symbol } { price }</span>
                </article>
                
            </section>
        </div>
    </div>
  )
}

export default PropertyCard;