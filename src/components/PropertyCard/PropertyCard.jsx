import React from 'react';
import './PropertyCard.css';
import { TagIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import ImageGallery from '../ImageGallery/ImageGallery';
import { Link } from 'react-router-dom';


function PropertyCard(props) {
    
    const { id, title, refer, mainImage, gallery, bedrooms, toilets, garage, price, financing, featured, city, operation, currency, showPrice } = props;

    const slug = title.replace(/\s/g, '-').toLowerCase();

        return (
            <Link to={`/property/detail?PID=${id}&title=${slug}`} className='property__card'>
                <div className='property__card-images'>
                    <div className='gallery'>
                        <div className='gallery__buttons'>

                        </div>
                        <ImageGallery 
                            className={'class' + id}
                            uniqueID={'class' + id}
                            images={gallery}
                        />
                        {/* <img className='gallery-item' src={mainImage} width='100%' alt='Imagen Propiedad' />
                    
                        {
                            gallery &&
                            gallery.map(image => {
                                return <img src={process.env.REACT_APP_IMAGES_URL + image} width='100%' alt='Imagen Propiedad' className='gallery-item' />
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
                </div>
                <section className='end-items'>
                    { financing && <span className='financing'>¡Financiación!</span>}
                    
                    <article className='price-fields'>
                        { showPrice ? <span className='price'> { currency } { parseInt(price) } </span> : <span className='price'>Consultar</span> }
                    </article>
                </section>
            </Link>
        )
}

export default PropertyCard;