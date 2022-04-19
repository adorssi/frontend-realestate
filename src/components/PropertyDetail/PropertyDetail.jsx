import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Badge from "../Badge/Badge";
import { LocationMarkerIcon, MapIcon } from "@heroicons/react/outline";
import "./PropertyDetail.css";
import PropertyLoading from "../PropertyLoading/PropertyLoading";
import ImageGallery from "../ImageGallery/ImageGallery";
import GoogleMaps from "../GoogleMap/GoogleMap";

function PropertyDetail() {
  let [searchParams, setSearchParams] = useSearchParams();
  const PID = searchParams.get("PID");

  const [isLoaded, setIsLoaded] = useState(false);
  const [property, setProperty] = useState([]);

  const url = `${process.env.REACT_APP_API_URL}/api/property/detail?PID=${PID}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        setProperty(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!isLoaded) {
    return <PropertyLoading />;
  }

  if (property.length !== 0) {
    const gallery = JSON.parse(property.gallery);
    return (
      <div className="property__detail">
        <div className="property__detail-images">
          <ImageGallery images={gallery} />
        </div>
        <main className="property__info">
          <section className="property__info-col1">
            <section className="fblock">
              <div className="property__info-badges">
                <Badge
                  text={property.operationType}
                  bgcolor={
                    property.operationType === "Venta"
                      ? "#2196f345"
                      : "#ffec0b73"
                  }
                  color={
                    property.operationType === "Venta" ? "#0574cf" : "#857b02"
                  }
                />
                <span className="ref tag">REF# {property.ref}</span>
              </div>
              <div className="property__info-title">
                <h1>{property.title}</h1>
              </div>
              <section className="property__info-location tag">
                {property.city.name === "Rural" ? (
                  <div className="rural">
                    <span className="material-icons">agriculture</span>
                    <p>Rural</p>
                  </div>
                ) : (
                  <span>
                    <LocationMarkerIcon className="location-icon" />
                    <p>{property.city.name}</p>
                  </span>
                )}

                <div className="property__info-location-address">
                  <MapIcon />
                  <p>{property.address}</p>
                </div>
              </section>
              <section className="property__info-icons">
                {property.bedrooms > 0 && (
                  <div className="bedrooms">
                    <span className="material-icons">bed</span>
                    <p>{property.bedrooms}</p>
                  </div>
                )}

                {property.toilets > 0 && (
                  <div className="bedrooms">
                    <span className="material-icons">bathroom</span>
                    <p>{property.toilets}</p>
                  </div>
                )}

                {property.garage > 0 && (
                  <div className="bedrooms">
                    <span className="material-icons">garage</span>
                    <p>{property.garage}</p>
                  </div>
                )}
              </section>
            </section>

            <section className="property__info-detail">
              <h2>Detalles</h2>
              <div
                style={{
                  width: "10%",
                  borderTop: "1px solid #e0e0e0",
                  margin: "1rem auto",
                }}
              ></div>
              <p>{property.description}</p>
            </section>

            <section className="property__info-amenities">
              <h2>Comodidades</h2>
              <div
                style={{
                  width: "10%",
                  borderTop: "1px solid #e0e0e0",
                  margin: "1rem auto",
                }}
              ></div>
              <div className="property__info-amenities-list">
                {property.amenitie &&
                  property.amenitie.map((amenity, i) => (
                    <div key={i + amenity} className="amenitie">
                      <span className="material-icons">{amenity.icon}</span>
                      <span>{amenity.name}</span>
                    </div>
                  ))}
              </div>
            </section>
          </section>
          <section className="property__info-map">
            <GoogleMaps
              lat={-33.879763}
              lng={-58.418557}
              propertyTitle={property.title}
              propertyCurrency={property.currency.symbol}
              propertyPrice={property.price}
            />
          </section>
          <section className="price__container">
            <section className="price__fields">
              <div className="price__fields-price">
                <span className="price__fields-currency">
                  {property.currency.symbol}
                </span>
                <span className="price__fields-price">
                  {parseInt(property.price)}
                </span>
              </div>
              <div className="price__fields-actions">
                <span className="material-icons">whatsapp</span>                
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, fugiat eius?</p>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default PropertyDetail;
