import React, { useState, useEffect } from "react";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties";
import PropertyCard from "../PropertyCard/PropertyCard";
import HeroSection from "../HeroSection/HeroSection";
import "./HomePage.css";

function HomePage() {
  const [cities, setCities] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  /**** Fetch only cities that have properties ****/
  const url = `${process.env.REACT_APP_API_URL}/api/property/citiesHaveProperties`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setCities(result);
      })
      .catch((error) => console.log(error));
  }, []);
  /*****      *******           *****/

  useEffect(() => {
    if(cities.length === 0) {
      return;
    }
    fetch(`${process.env.REACT_APP_API_URL}/api/property?cityId=${cities[0].cityId}`)
      .then((response) => response.json())
      .then((result) => {
        setFilteredProperties(result.data);
      })
      .catch((error) => console.log(error));
  }, [cities]);

  const getPropertiesByCity = async (e) => {
    Array.from(e.target.parentElement.children).forEach((element) => {
      if (element.classList.contains("btnActive")) {
        element.classList.remove("btnActive");
      }
    });

    e.target.classList.add("btnActive");

    const cityId = e.target.getAttribute("data-id");
    const url = `${process.env.REACT_APP_API_URL}/api/property?cityId=${cityId}`;
    const response = await fetch(url);
    const result = await response.json();
    setFilteredProperties(result.data);
  };

  return (
    <div>
      <HeroSection />
      <main className="main__container">
        <FeaturedProperties />
        <section className="filter__city">
          <div className="filter__city-title">
            {cities.length !== 0 &&
              cities.map((city) => {
                return (
                  <p
                    key={city.cityId}
                    className={
                      city.cityId === cities[0].cityId
                        ? "filter__city-item btnActive"
                        : "filter__city-item"
                    }
                    data-id={city.cityId}
                    onClick={getPropertiesByCity}
                  >
                    {city.name}
                  </p>
                );
              })}
          </div>
          <div className="properties__container">
            {filteredProperties.length !== 0 &&
              filteredProperties.map((property, i) => (
                <PropertyCard
                  key={property + i}
                  id={property.id}
                  title={property.title}
                  city={property.city.name}
                  operation={property.operationType}
                  refer={property.ref}
                  mainImage={property.mainImage}
                  gallery={JSON.parse(property.gallery)}
                  bedrooms={property.bedrooms}
                  toilets={property.toilets}
                  garage={property.garage}
                  currency={property.currency.symbol}
                  price={property.price}
                  showPrice={property.showPrice}
                  financing={property.financing}
                  featured={property.featured}
                />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
