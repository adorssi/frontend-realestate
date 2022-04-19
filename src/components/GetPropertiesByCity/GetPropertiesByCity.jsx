import React, { useState, useEffect } from 'react'
import PropertyCard from '../PropertyCard/PropertyCard';

function GetPropertiesByCity({cityId}) {

    const [properties, setProperties] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const url = `${process.env.REACT_APP_API_URL}/api/property?cityId=${cityId}`;
    
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((result) => {
            setIsLoaded(true);
            setProperties(result.data);
          })
          .catch((error) => console.log(error));
      }, []);

  return (
    <div className='properties__byCity'>
        {
            isLoaded && properties.map((property, i) => {
            <PropertyCard
              key= {property + i}
              id= {property.id}
              title= {property.title}
              city= {property.city.name}
              operation= {property.operationType}
              refer= {property.ref}
              mainImage= {property.mainImage}
              gallery= {JSON.parse(property.gallery)}
              bedrooms= {property.bedrooms}
              toilets= {property.toilets}
              garage= {property.garage}
              currency= {property.currency.symbol}
              price= {property.price}
              showPrice= {property.showPrice}
              financing= {property.financing}
            />
            })
        }
    </div>
  )
}

export default GetPropertiesByCity