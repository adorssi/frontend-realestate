import React from 'react';
import { useState, useEffect } from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './FeaturedProperties.css';

// Ejemplo con axios
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const result = await axios(
//         'https://api.myjson.com/bins/1g6j0f'
//       );
//       setProperties(result.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchData();
// }, []);

function FeaturedProperties() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [properties, setProperties] = useState([]);

  const url = `${process.env.REACT_APP_API_URL}/api/property/featured`;

	useEffect(() => {
		  fetch(url)
        .then(response => response.json())
        .then((data) => {
            setIsLoaded(true);
            setProperties(data.data);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
	}, []);

  if (error) {
    return <div>Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div>
      <div className='featured__title'>
        <h2>Destacadas</h2>
      </div>
      <div className='properties__container'>

        {
          properties.map((property, i) => 
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
          )
        } 

      </div>
    </div>
  )}
}

export default FeaturedProperties;