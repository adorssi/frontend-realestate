import React from 'react';
import './PropertyCard.css';
import { TagIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import bgHome from '../../images/bg-home.jpg';
import { useState, useEffect } from 'react';


function PropertyCard(props) {
    
    const { title, operationType, refer, mainImage, imageGallery, bedrooms, toilets, garage, price, financing, featured, city, operation, currency, showPrice } = props;

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
                            <p>{ city }</p>
                        </div>
                        <div className='operation tag'>
                            <TagIcon className='operation-icon' />
                            <p>{ operation }</p>
                        </div>
                    </div>
                    <div className='title'>
                            <span className='ref tag'>REF# { refer }</span>
                            <h2 className='property-title'>{title}</h2>
                    </div>
                    <section className='main-amenities'>
                        <article>
                            <i className="fas fa-bed"></i>
                            <p>{ bedrooms }</p>
                        </article>
                        <article>
                            <i className="fas fa-toilet"></i>
                            <p>{ toilets }</p>
                        </article>
                        <article>
                            <i className="fas fa-car"></i>
                            <p>{ garage }</p>
                        </article>
                    </section>
                    <section className='end-items'>
                        { financing && <span className='financing'>¡Financiación!</span>}
                        
                        <article className='price-fields'>
                           { showPrice ? <span className='price'> { currency } { parseInt(price) } </span> : <span className='price'>Consultar</span> }
                        </article>
                        
                    </section>
                </div>
            </div>
        )
}

export default PropertyCard;