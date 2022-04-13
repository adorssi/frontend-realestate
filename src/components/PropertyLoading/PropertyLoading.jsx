import React from 'react'
import './PropertyLoading.css'

function PropertyLoading() {
  return (
    <div className="loading">
      <div className="loading__image"></div>
        <div className="loading__badges">
          <span id="operation"></span>
          <span id="ref"></span>
        </div>
        <div className="loading__title"></div>
        <div className="loading__title w50"></div>
        <div className="loading__city"></div>
        <div className="loading__details">
          <div className="loading__details__item"></div>
          <div className="loading__details__item"></div>
          <div className="loading__details__item"></div>
          <div className="loading__details__item"></div>
        </div>
    </div>
  )
}

export default PropertyLoading