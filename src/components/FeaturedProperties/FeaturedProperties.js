import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './FeaturedProperties.css';

function FeaturedProperties() {

  let properties = [
    {
      title: 'Hermosa propiedad a estrenar',
      city: 'Nueva Palmira',
      operation: 'Venta',
      ref: 1236,
      mainImage: '../../images/bg-home.jpg',
      imageGallery: ['../../images/p1.jpg','../../images/p2.jpg','../../images/p3.jpg','../../images/p4.jpg'],
      bedrooms: '2',
      toilet: '1',
      garage: '1',
      currency: 'U$S',
      price: 55000,
      financing: true,
    },
    {
      title: 'Apartamento frente al rio',
      city: 'Carmelo',
      operation: 'Alquiler',
      ref: 1636,
      mainImage: '../../images/bg-home.jpg',
      imageGallery: ['../../images/p1.jpg','../../images/p2.jpg','../../images/p3.jpg','../../images/p4.jpg'],
      bedrooms: '3',
      toilet: '1',
      garage: '1',
      currency: '$',
      price: 15000,
      financing: false,
    },
    {
      title: 'Casa con amplio terreno',
      city: 'Agraciada',
      operation: 'Venta',
      ref: 1136,
      mainImage: '../../images/bg-home.jpg',
      imageGallery: ['../../images/p1.jpg','../../images/p2.jpg','../../images/p3.jpg','../../images/p4.jpg'],
      bedrooms: '4',
      toilet: '2',
      garage: '1',
      currency: 'U$',
      price: 155000,
      financing: false,
    },
    {
      title: 'Chara de 12ha. productiva',
      city: 'Rural',
      operation: 'Venta',
      ref: 1238,
      mainImage: '../../images/bg-home.jpg',
      imageGallery: ['../../images/p1.jpg','../../images/p2.jpg','../../images/p3.jpg','../../images/p4.jpg'],
      bedrooms: '0',
      toilet: '0',
      garage: '0',
      currency: 'U$S',
      price: 260000,
      financing: false,
    }
  ]
  return (
    <div>
      <div className='featured__title'>
        <h2>Destacadas</h2>
      </div>
      <div className='properties__container'>
      <PropertyCard />
        {/* {
          properties.map((property, i) => 
            <PropertyCard
              key= {property + i}
              title= {property.title}
              city= {property.city}
              operation= {property.operation}
              refer= {property.ref}
              mainImage= {property.mainImage}
              imageGallery= {property.imageGallery}
              bedrooms= {property.bedrooms}
              toilet= {property.toilet}
              garage= {property.garage}
              currency= {property.currency}
              price= {property.price}
              financing= {property.financing}
            />
          )
        }  */}

      </div>
    </div>
  )
}

export default FeaturedProperties;